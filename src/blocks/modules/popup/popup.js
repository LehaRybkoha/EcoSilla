$(document).ready(function () {
  $('.open-popup').click(function () {
    $('.popup, .popup-overlay').show()
  })
  $('.popup-overlay').click(function () {
    $('.popup, .popup-overlay').hide();
  })
  $('.open-personal').click(function () {
    $('.personal, .popup-overlay').show()
  })
  $('.close-personal').click(function () {
    $('.personal, .popup-overlay').hide();
  })
  $('.open-policy').click(function () {
    $('.policy, .policy-overlay').show()
  })
  $('.close-policy').click(function () {
    $('.policy, .policy-overlay').hide();
    $('.popup-overlay').show()
  })
});