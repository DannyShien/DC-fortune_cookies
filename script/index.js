console.log('yep, its here');
// Classes are for CSS Styling
// 'Data Attributes' are for JS

// 1. Make some code run when I click the button
const triggerElement = document.querySelector('[data-trigger]');
const outputElement = document.querySelector('[data-output]');

// == 1*  function hello 
// function hello() {
//     console.log('Hello addEventListener!');
// }
// addEventListener accepts 2 arguments: 
// - a string that identifies the kind of event to listen for
// - a function that says what to do when the event happens
// Using the ananomous function below 
triggerElement.addEventListener('click', function () {
    console.log('Hello addEventListener!');
    outputElement.textContent= 'something';
});
// 1* use the function hello here
// triggerElement.addEventListener('click', hello); -one way to implement a function

// 2. Write some text to the page on the buttom click

// 3. Pull text from an array of text to write to the page.
