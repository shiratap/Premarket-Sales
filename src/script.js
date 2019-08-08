var $form = $('#test-form'),
  url =
    'https://script.google.com/macros/s/AKfycbzwMK71bP3KUS8FUgTwvbxjut_xCNE6glVDDfGjla33SEA15suA/exec';

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: 'GET',
    dataType: 'json',
    data: $form.serializeObject()
  });
  console.log(jqxhr);
});
