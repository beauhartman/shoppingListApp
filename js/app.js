$(document).ready(function() {
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
		$("#list ul").append('<li><span class="delete"></span>' + $("input#add-new-item").val() + '<span class="red green"></span>' + '</li>');
		$("#add-new-item").val("");
	})
});
