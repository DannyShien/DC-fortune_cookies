console.log('You\'re in it!');
// Classes are for CSS Styling
// 'Data Attributes' are for JS

// 1. Make some code run when I click the button
const triggerElement1 = document.querySelector('[data-trigger1]');
const triggerElement2 = document.querySelector('[data-trigger2]');
const outputElement = document.querySelector('[data-output1]');
const outputJokeElement = document.querySelector('[data-output2]');

// 2. Write some text to the page on the buttom click
const quotes = [
    "His tears can cure cancer, too bad he never cries.",
    "He once won a staring contest with his own reflection.",
    "Batman watches Saturday morning cartoons about him.",
    "Mosquitoes refuse to bite him purely out of respect.",
    "If he was to pat you on the back, you would list it on your resume.",
    "His lovemaking has been detected by a seismograph.",
    "The star on his Christmas tree is tracked by NASA",
    "Bikers walk their motorcycles past his home,"
];

const jokes = [
    "What’s brown and sticky? A stick.",
    "How many apples grow on a tree? All of them.",
    "The only thing worse than having diarrhea is having to spell it.",
    "How do you make a tissue dance?  You put a little boogie in it!",
    "I went to buy some camouflage trousers the other day, but I couldn’t find any.",
    "What do you call a man with no nose and no body? Nobody nose.",
    "What do you call a fish with no eyes? A fshhhh.",
    "I’ve deleted the phone numbers of all the Germans I know from my mobile phone. Now it’s Hans free.",
    "Did you hear about the kidnapping at school? It’s fine, he woke up.",
    "What do you call a cow with no legs? Ground beef."
];
// let index = 0;


// 3. Pull text from an array of text to write to the page.
// == *1  function hello 
// function hello() {
//     console.log('Hello addEventListener!');
// }
// addEventListener accepts 2 arguments: 
// - a string that identifies the kind of event to listen for
// - a function that says what to do when the event happens
// Using the ananomous function below 
triggerElement1.addEventListener('click', function () {
    console.log('quote-addEventListener invoked');
    // const newFortune = quotes.pop();
    const newQuote = quotes[Math.floor(Math.random() * quotes.length -1)];
    outputElement.textContent = newQuote;
    // index++;
    // if (index > quotes.length -1) {
    //     index = 0;
    // }
});

triggerElement2.addEventListener('click', function () {
    console.log('joke-addEventListener invoked');
    const newJoke = jokes[Math.floor(Math.random() * jokes.length -1)];
    outputJokeElement.textContent = newJoke;
    // index++;
    // if (index > jokes.length -1) {
    //     index = 0;
    // }
});
// *1 use the function hello here
// triggerElement.addEventListener('click', hello); -one way to implement a function



