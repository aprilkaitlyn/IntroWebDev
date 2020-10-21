/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Kaitlyn Heishman 
   Date: 20 October 2020   
*/

"use strict";

var thisTime = new Date("October 20, 2020 07:18:28 PM");
var timeStr = thisTime.toLocaleString();
timeStr = document.getElementById("timeStamp").innerHTML;

var thisHour = thisTime.getHours();
var thisMonth = thisTime.getMonth();
var mapNum = (2*thisMonth+thisHour) % 24;

var imgStr = "<img src='sd_sky" + mapNum + ".png' />";
document.getElementById("planisphere").insertAdjacentHTML(imgStr);f
