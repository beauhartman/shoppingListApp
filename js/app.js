$(document).ready(function() {
	var deleteItem = '<span class="delete"></span>'
	var button = '<button id="needgot" class="need" data-text-swap="Got It!"></button>'

	//* User Types in New Item
	$("#add-new-items").keydown(function(e) {
		if (e.keyCode == 13) {
			addItem();
		}
	})

	function addItem() {
		//* add new <p> with proper content
		var item = $("#add-new-items").val();
		var display = "<li> + deleteItem + item + button + </li>"
		$("#list").prepend(display);
		$("#add-new-items").val("");
		$("#list").first("li").
	}
	
	//* User Clicks "+" Button
	$(".add-function").on("click", function() {
		addItem();
	})

	//* User Wants to Remove List Item
	$()

	//* User Wants to Mark Item as "Got It"
	$("#needgot").on("click", function() {
		var needgot = $(this);
		if (needgot.text() == needgot.data("text-swap")) {
			needgot.text(needgot.data("text-original"));
		} else {
			needgot.data("text-original", needgot.text());
			needgot.text(needgot.data("text-swap"));
		}
	});

	//* User Wants to Start a New List
	//* push ".start-a-new-list" button
	//* reset "#list" section
	$()
});
