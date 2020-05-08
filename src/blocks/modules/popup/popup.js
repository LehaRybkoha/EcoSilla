$(document).ready(function () {
	$('.open-popup').click(function () {
		$('.popup, .popup-overlay').show()
	})
	$('.popup-overlay').click(function () {
		$('.popup, .popup-overlay').hide();
	})
});