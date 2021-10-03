
  
'use strict';

// rng function for generating random sales data
function getRandom(max, min) {
  return Math.random() * (max - min) + min;
}

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
var stores = [];
var grandTotalSales = 0;

var tableArticle = document.getElementById('tableArticle');
var salesTable = document.createElement('table');
tableArticle.appendChild(salesTable);
var tableHeader = document.createElement('thead');
salesTable.appendChild(tableHeader);
var headerRow = document.createElement('tr');
var tableBody = document.createElement('tbody');




