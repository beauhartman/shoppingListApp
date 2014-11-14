$(document).ready(function() {

	//* User wants to enter an item
	$('#add-new-item').keydown(function(enter) {
		if (enter.keyCode == 13) {
			displayItem();
			$('#add-new-item').val('');
		}
	})

	function displayItem() {
		var newItem = $('#add-new-item').val()
		$('#list').prepend('<li>' + newItem + '<span class="delete">X</span>' + '</li>');
	}

	//* User wants to record they do(n't) have the item
	$('#list').on('click', 'li', function() {
		$(this).toggleClass('green');
	})

	//* User wants to reset the list
	$(document).on('click', '.start-a-new-list', function() {
		$('#list').empty();
	})

	//* User wants to delete an item from the list
	$(document).on('click', '.delete', function() {
		$(this).closest('li').remove();
	})
})