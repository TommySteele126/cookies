
  
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

var tableArticle = document.getElementById('tableArticle');
var salesTable = document.createElement('table');
tableArticle.appendChild(salesTable);
var tableHeader = document.createElement('thead');
salesTable.appendChild(tableHeader);
var headerRow = document.createElement('tr');
var tableBody = document.createElement('tbody');
salesTable.appendChild(tableBody);
var tableFooter = document.createElement('tfoot');
salesTable.appendChild(tableFooter);
var footerRow = document.createElement('tr');

// constructor function for creating stores
function Store(name, avgSale, maxCust, minCust) {
  this.name = name;
  this.avgSale = avgSale;
  this.maxCust = maxCust;
  this.minCust = minCust;
  this.dailySales = 0;
  this.hourlySales = [];
  stores.push(this);
}




