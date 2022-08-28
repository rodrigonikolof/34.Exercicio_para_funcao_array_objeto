function myScope(){

const form = document.querySelector('.form');
const result = document.querySelector('.result');

const people = [];

function receiveEventForm (event) {
event.preventDefault();

const userName = form.querySelector('.userName');
const lastName = form.querySelector('.userLastname');
const userWeight = form.querySelector('.userWeight');
const userHeight = form.querySelector ('.userHeight');

people.push({
userName : userName.value,
lastName : lastName.value,
userWeight : userWeight.value,
userHeight : userHeight.value,
})
console.log(people);
result.innerHTML += `<p> ${userName.value} ${lastName.value} ${userWeight.value} ${userHeight.value}</p>`
  }
  form.addEventListener('submit', receiveEventForm);
}
myScope();



