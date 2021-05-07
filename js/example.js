var table;             // Unit of table
var i = 1;             // Set counter to 1
var msg = '<h2>Multiplication Table</h2>';

function calculate_multiply() {
  table = document.getElementById("myInput").value;
  while (i < 11) {
    msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
    i++;
  }
}

var el = document.getElementById('blackboard');
el.innerHTML = msg;