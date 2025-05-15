// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Sasha Vorontsov
// Created on: April 2025
// This file contains the JS functions for index.html

"use strict"

  if (navigator.serviceWorker) {
+   navigator.serviceWorker.register("/ICD2O-Unit-6-02-Sasha-OK-bit/sw.js",
  {
  scope: "/ICD2O-Unit-6-02-Sasha-OK-bit/",
    })
}

function calculaterandomnumber () {

if( localStorage.savedCookieNumber ) (
  localStorage.savedCookie = Number(localStorage.savedCookieNumber) +1
);
else{
  localStorage.savedCookieNumber = 1;
} 
document.getElementById("answer")
<p>"Total Hits :" + localStorage.savedCookieNumber </p> 
}
