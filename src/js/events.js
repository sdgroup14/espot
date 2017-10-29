$(document).on('click', function(e) {
  if (!$(e.target).closest(".search_field").length && $('.search_field').hasClass('show-search_field')) {
    $('#findCity_input').blur();
    $('.search_field').removeClass('show-search_field');
  }
});

$('body').on('click', '.btn-place-search', function() {
  setTimeout(function() {
    $('.search_field').addClass('show-search_field');
    setTimeout(function() {
      $('#findCity_input').focus();
    }, 333)
  }, 1)
});

$('body').on('click', '.btn-place-next', function(){
  console.log('123');
  $('.first-step-auth, .second-step-auth').addClass('active');
});