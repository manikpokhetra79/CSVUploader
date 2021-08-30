//filter table rows function
function filterTable() {
  $('#input').on('keyup', function () {
    var value = $(this).val().toLowerCase();
    $('tbody tr').filter(function () {
      console.log($(this).toggle($(this).text()));
      //hide tr with diff text
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
}
$(filterTable());

// pagination function
