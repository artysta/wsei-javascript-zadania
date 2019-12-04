document.addEventListener('DOMContentLoaded', function () {

	var getSpan = document.querySelectorAll('span');
	var getUl = document.querySelectorAll('ul');

	for (let i = 0; i < getUl.length; i++) {
		getUl[i].style.display = 'none';
	}

	for (let i = 0; i < getSpan.length; i++) {
		getSpan[i].addEventListener('mouseover', (event) => {
			console.log(event.target);
			event.target.nextElementSibling.style.display = 'block';

		})

		getSpan[i].addEventListener('mouseout', (event) => {
			event.target.nextElementSibling.style.display = 'none';
		})

	};

	var Students = function(array) {
		this.students = array;
	}

	// Zadanie 0.
	var Students = function(array) {
		 this.students = array;
		 this.countLetters = function() {
			this.numberOfLetters = this.students.map(name => name.length);
		}
	}

	var students = new Students(["Ania", "Kamil", "Mariusz"]);
	students.countLetters();
	console.log(students.numberOfLetters); // [4, 5, 7]
});
