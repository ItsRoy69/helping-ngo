// JavaScript code
function search_clubs() {
	let input = document.getElementById('search-input').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('columns has-text-centered');

	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="columns-item";
		}
	}
}
