"use strict";

//Takes specified ageGroup (String) and all categories (Array)
function generateEntity(ageGroup, categories) {
  let entity = new Array(categories.length - 1);
  for (let i = 0; i < categories.length; i++) {
    entity[i] = generateAttribute(ageGroup, categories[i]);
  }
  return entity;
}

function generateAttribute(key, arr) {
  let possibleAttributes = arr.filter(
    arr => arr[0].includes(key) || arr[0] == "*"
  );
  const randomIndex = Math.floor(Math.random() * possibleAttributes.length);
  let attribute = possibleAttributes[randomIndex][1];
  return attribute;
}

module.exports = { generateEntity, generateAttribute };
