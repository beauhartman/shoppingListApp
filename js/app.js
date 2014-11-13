$(document).ready(function() {

	//* User wants to enter an item
	//* user types in new item name
	$("#add-new-item").keydown(function(enter) {
		if (enter.keyCode == 13) {
			$("#add-new-item").text();
		}
	})


	//* user hits enter
	//* new item name stored

	//* Displaying the newly entered item as a list item

	//* User wants to record they do(n't) have the item
	$('#list').on('click', 'li', function() {
		$(this).toggleClass('green');
	})

	//* User wants to reset the list
	$(document).on("click", ".start-a-new-list", function() {
		$("#list").remove("li");
	})

	//* User wants to delete an item from the list
	$(document).on("click", ".delete", function() {
		$(this).closest("li").remove();
	})
})