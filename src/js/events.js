$(document).on('click', function(e) {
  if (!$(e.target).closest(".search_field").length && $('.search_field').hasClass('show-search_field')) {
    $('#findCity_input').blur();
    $('.search_field').removeClass('show-search_field');
  }
});

$('body').on('click', '.btn-place-serch', function() {
  setTimeout(function() {
    $('.search_field').addClass('show-search_field');
    setTimeout(function() {
      $('#findCity_input').focus();
    }, 333)
  }, 1)
});