$(document).ready(function() {
	//* User Types in New Item
	$("#add-new-items").keydown(function(e) {
		if (e.keyCode == 13) {
			addItem();
		}
	})

	function addItem() {
		//* add new <p> with proper content
		var item = $("#add-new-items").val();
		var display = "<p class='need-it'> + deleteItem + item + "
		$("#content-section-list").prepend(display);
		$("")
	}
	
	//* User Clicks "+" Button
	$(".add-function").on("click", function() {
		addItem();
	})

	//* User Wants to Remove List Item
	$()

	//* User Wants to Mark Item as "Got It"
	$()

	//* User Wants to Start a New List
	$()
});
