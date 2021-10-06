
  
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
 // generates array of random sales numbers
Store.prototype.getRandomSales = function() {
  for (var i=0; i<hours.length; i++) {
    this.hourlySales.push(Math.floor(getRandom(this.maxCust, this.minCust) * this.avgSale));
    this.dailySales += Math.floor(this.hourlySales[i]);
  }
};

// renders the random sales numbers in the ui
Store.prototype.renderSales = function() {
  this.getRandomSales();
  var row = document.createElement('tr');
  tableBody.appendChild(row);
  var storeCell = document.createElement('th');
  storeCell.textContent = this.name;
  row.appendChild(storeCell);
  for(var i=0; i<this.hourlySales.length; i++) {
    var hourlySalesCell = document.createElement('td');
    hourlySalesCell.textContent = this.hourlySales[i];
    row.appendChild(hourlySalesCell);
  }
  var storeTotalCell = document.createElement('th');
  storeTotalCell.textContent = (this.dailySales);
  row.appendChild(storeTotalCell);
};

// instantiating store objects
new Store('Seattle', 6.3, 65, 23);
new Store('Tokyo', 1.2, 24, 3);
new Store('Dubai', 3.7, 38, 11);
new Store('Paris', 2.3, 38, 20);
new Store('Lima', 4.6, 16, 3);



