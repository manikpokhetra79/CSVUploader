module.exports.uploader = (req, res) => {
  return res.render('csv_uploader', {
    title: 'CSV uploader Page',
  });
};

module.exports.displayfiles = (req, res) => {
  return res.render('csv_display', {
    title: 'View Uploaded Files',
  });
};

module.exports.upload = (req, res) => {
  console.log('Hey');
};
