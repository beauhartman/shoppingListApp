$(document).ready(function() {
	var deleteX = '<span class="delete"></span>'
	var redGreen = '<span class="red green"></span>'

	//* User wants to delete an item from the list
	$(document).on("click", ".delete", function() {
		$(this).closest("li").remove();
	})

	//* User wants to reset the list
	$(document).on("click", ".start-a-new-list", function() {
		$("#list").empty();
	})

	//* User wants to record they have/do not have the item
	$(document).on("click", "#haveit", function() {
		if ($(this).hasClass("red")) {
			$(this).removeClass("red");
			$(this).addClass("green");
		} else {
			$(this).removeClass("green");
			$(this).addClass("red");
		}
	})

	//* User wants to add an item to the list
	$(document).on("click", "#add-button", function() {
		var getItem = $("#add-new-item").val();
		$("#list > ul").append('<li>' + deleteX + getItem + redGreen + '</li>');
		$("#add-new-item").val("");
	})
});
