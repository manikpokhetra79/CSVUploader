//filter table rows function
function filterTable() {
  $('#input').on('keyup', function () {
    var value = $(this).val().toLowerCase();
    $('tbody tr').filter(function () {
      //hide tr with diff text
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });
}
$(filterTable());

// pagination function
