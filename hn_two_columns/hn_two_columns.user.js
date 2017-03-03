// ==UserScript==
// @name        hn_two_columns
// @namespace   com.kludgecode.hn
// @description Two column layout for Hacker News Main page and similar pages

// @include     https://news.ycombinator.com/news*
// @include     https://news.ycombinator.com/ask*
// @include     https://news.ycombinator.com/show*
// @include     https://news.ycombinator.com/new*

// @version     1
// @grant       none
// ==/UserScript==

(function () {
// r is the container for the content we build
var r = document.createElement('tr');

// it will display two columns
var left = document.createElement('td');
var right = document.createElement('td');

// get More link
var moreLink = document.getElementsByClassName('morelink')[0];

// itemList[0] is the target document element
var itemList = document.getElementsByClassName('itemlist')[0];

// An array of the first row of each item
var row1 = Array.prototype.slice.call(document.getElementsByClassName('athing'), 0);

// the second row of each item; a table body that wraps both rows; a table that wraps the table body
var row2 = []; tb = []; t = [];

// control the loops
var len = row1.length;

// build the rest of the elements
for (var i = 0; i < len; i++) {
  row2.push(row1[i].nextElementSibling);
  tb.push(document.createElement('tb'));
  t.push(document.createElement('table'));
};

// add row1 elements to table body
 for (var i = 0; i < len; i++) {
   tb[i].appendChild(row1[i]);
 };
 // add row2 elements to table body
 for (var i = 0; i < len; i++) {
   tb[i].appendChild(row2[i]);
 };

// insert table bodies into item tables
for (var i = 0; i < len; i++) {
  t[i].appendChild(tb[i]);
};

// build left column
for (var i = 0; i < len / 2; i++) {
  left.appendChild(t[i])
};
//build right column
for (var i = len / 2; i < len; i++) {
  right.appendChild(t[i])
};

right.appendChild(moreLink); // don't forget the More link

// build row for itemList
r.appendChild(left);
r.appendChild(right);

// clear existing structure from itemList
  itemList.innerHTML = "";
  // insert new structure in itemList
  itemList.append(r)
})();
