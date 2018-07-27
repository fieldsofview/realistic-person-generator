"use strict";

//This is a realistic person generator
//This program creates persons and allows you to create links between
//categories

//import functions
const generateEntity = require("./functions/index.js").generateEntity;
const generateAttribute = require("./functions/index.js").generateAttribute;

//Data for generating a person
const ageGroups = ["Child", "Youth", "Adult", "Senior"];

//[0] in the following categories lets you set
//certain attributes as appliable to only selected ageGroup(s)
//* means appliable to all ageGroups
const races = [
  ["*", "Indian"],
  ["*", "Chinese"],
  ["*", "Japanese"],
  ["*", "European"],
  ["*", "African"],
  ["*", "Latin"]
];

const religions = [
  ["*", "Hindu"],
  ["*", "Muslim"],
  ["*", "Christian"],
  ["*", "Buddhist"],
  ["*", "Atheist"],
  ["*", "Agnostic"]
];
const dailyOccupations = [
  ["Adult", "Cook"],
  ["Adult", "School teacher"],
  ["Youth Adult", "Rickshaw driver"],
  ["Youth", "High school student"],
  ["Child", "Kindergarten"],
  ["*", "Street dweller"],
  ["Adult", "Software developer"],
  ["Senior", "Retiree"]
];

const categories = [races, religions, dailyOccupations];
const randomIndex = Math.floor(Math.random() * ageGroups.length);

const ageGroup = ageGroups[randomIndex];

console.log(ageGroup, generateEntity(ageGroup, categories));
//Example output
//Youth [ 'Chinese', 'Muslim', 'Street dweller' ]
