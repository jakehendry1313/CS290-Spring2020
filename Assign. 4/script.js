var table = document.createElement('table');
var headRow = document.createElement('thead');
table.appendChild(headRow);

for (var i = 1; i <= 4; i++) {
	var th = document.createElement('th');
	headRow.appendChild(th);
	th.appendChild(document.createTextNode('Header ' + i));
	th.style.border = '1px solid black';
}

var tableBody = document.createElement('tbody');
table.appendChild(tableBody);

for (var i = 1; i <= 3; i++) {
	var tr = document.createElement('tr');
	tableBody.appendChild(tr);

	for (var j = 1; j<= 4; j++) {
		var td = document.createElement('td');
		td.appendChild(document.createTextNode(i + ", " + j));
		tr.appendChild(td);
		td.style.border = '1px solid black'
	}
}

make_btn = function(id, text) {
	var some_btn = document.createElement('button');
	some_btn.setAttribute('id', id);
	some_btn.textContent = text;

	return some_btn
}

document.body.appendChild(table)
document.body.appendChild(document.createElement('br'));
document.body.appendChild(make_btn('goUp', 'Up'));
document.body.appendChild(make_btn('goDown', 'Down'));
document.body.appendChild(make_btn('goLeft', 'Left'));
document.body.appendChild(make_btn('goRight', 'Right'));
document.body.appendChild(document.createElement('br'));
document.body.appendChild(make_btn('markCell', 'Mark Cell'));

var currentRow = 0;
var currentCol = 0;
table.rows[0].cells[0].style.border = '3px solid black';

document.getElementById('goUp').addEventListener("click", function() {
	var currentCell = table.rows[currentRow].cells[currentCol];

	if (currentRow == 0){
		currentCell = currentCell;
	}

	else {
		table.rows[currentRow].cells[currentCol].style.border = '1px solid black';
		currentRow = currentRow - 1;
		currentCell = table.rows[currentRow].cells[currentCol];
		currentCell.style.border = '3px solid black';
	}
});

document.getElementById('goDown').addEventListener("click", function() {
	var currentCell = table.rows[currentRow].cells[currentCol];

	if (currentRow == 2){
		currentCell = currentCell;
	}

	else {
		table.rows[currentRow].cells[currentCol].style.border = '1px solid black';
		currentRow = currentRow + 1;
		currentCell = table.rows[currentRow].cells[currentCol];
		currentCell.style.border = '3px solid black';
	}
});

document.getElementById('goLeft').addEventListener("click", function() {
	var currentCell = table.rows[currentRow].cells[currentCol];

	if (currentCol == 0){
		currentCell = currentCell;
	}

	else {
		table.rows[currentRow].cells[currentCol].style.border = '1px solid black';
		currentCol = currentCol - 1;
		currentCell = table.rows[currentRow].cells[currentCol];
		currentCell.style.border = '3px solid black';
	}
});

document.getElementById('goRight').addEventListener("click", function() {
	var currentCell = table.rows[currentRow].cells[currentCol];

	if (currentCol == 3){
		currentCell = currentCell;
	}

	else {
		table.rows[currentRow].cells[currentCol].style.border = '1px solid black';
		currentCol = currentCol + 1;
		currentCell = table.rows[currentRow].cells[currentCol];
		currentCell.style.border = '3px solid black';
	}
});

document.getElementById('markCell').addEventListener("click", function() {
	var currentCell = table.rows[currentRow].cells[currentCol];

	currentCell.style.background = 'yellow';
});