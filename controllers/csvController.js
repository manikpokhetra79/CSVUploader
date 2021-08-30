const CSVFile = require('../models/csv');
const fs = require('fs');
const parser = require('csv-parser');

module.exports.displayfiles = async (req, res) => {
  let files = await CSVFile.find({});
  return res.render('csv_display', {
    title: 'View Uploaded Files',
    files: files,
  });
};

//upload csv file action
module.exports.upload = async (req, res) => {
  try {
    CSVFile.uploadedFile(req, res, async (err) => {
      if (req.file) {
        let file = await CSVFile.create(req.file);
        return res.status(200).json({
          file: file,
        });
      } else {
        return res.status(400).json({
          message: err,
        });
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }
};

//action for deleting csv
module.exports.deleteFile = async (req, res) => {
  try {
    let file = await CSVFile.findById(req.params.id);
    if (file) {
      fs.unlinkSync(file.path);
      file.remove();
    }
    return res.status(200).json({
      message: 'File Deleted',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Server Error',
    });
  }
};
// displaydata action
module.exports.displayData = async (req, res) => {
  try {
    let file = await CSVFile.findById(req.params.id);
    let path = file.path;
    let results = [];
    fs.createReadStream(path)
      .pipe(parser({ delimiter: ',' }))
      .on('data', (data) => results.push(data))
      .on('end', () => {
        console.log(results);
        return res.render('csv_data', {
          title: 'File Data',
          data: results,
        });
      });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal error',
    });
  }
};
