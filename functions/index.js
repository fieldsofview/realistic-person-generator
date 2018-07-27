"use strict";

//Takes specified ageGroup (String) and all categories (Array)
function generatePerson(ageGroup, categories) {
  let person = new Array(categories.length - 1);
  for (let i = 0; i < categories.length; i++) {
    person[i] = generateAttribute(ageGroup, categories[i]);
  }
  return person;
}

function generateAttribute(key, arr) {
  let possibleAttributes = arr.filter(
    arr => arr[0].includes(key) || arr[0] == "*"
  );
  const randomIndex = Math.floor(Math.random() * possibleAttributes.length);
  let attribute = possibleAttributes[randomIndex][1];
  return attribute;
}

module.exports = { generatePerson, generateAttribute };
