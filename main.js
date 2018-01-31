//Get modal element

var modal = document.getElementById('simpleModal');

//Get open modal button

var modalBtn = document.getElementById('modalBtn');

//Get close button

var closeBtn = document.getElementsByClassName('closeBtn')[0];



//Listen for a click on the open modal button

modalBtn.addEventListener('click', openModal);

//Set the function the opens the modal when the button is clicked

function openModal() {
	modal.style.display = 'block';
}




//Listen for a click on the close modal button

closeBtn.addEventListener('click', closeModal);

//Set the function the opens the modal when the button is clicked

function closeModal() {
	modal.style.display = 'none';
}



//Listen for a click outside the modal to close it

window.addEventListener('click', clickOutside);

//Set the function the opens the modal when the button is clicked

function clickOutside(e) {
	if(e.target == modal) {
		modal.style.display = 'none';
	}
}