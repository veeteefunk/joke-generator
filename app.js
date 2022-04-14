const jokeBtn = document.getElementById('joke-btn');
const punchBtn = document.getElementById('punch-btn');
const joke = document.getElementById('joke');
const punchline = document.getElementById('punchline');

const jokes = [
    {   joke: "What did the toaster say to the slice of bread?",
        punchline: "I want you inside me."},
    {   joke: "I'll admit it, I have a tremendous sex drive.",
        punchline: "My girlfriend lives forty miles away."},
    {   joke: "How do you make a pool table laugh?",
        punchline: "Tickle its balls."},
    {   joke: "A naked man broke into a church.",
        punchline: "The police chased him around and finally caught him by the organ."},
    {   joke: "What do a penis and a Rubik's Cube have in common?",
        punchline: "The more you play with it, the harder it gets." },
]

let randomNum = 0;

jokeBtn.addEventListener('click', generateJoke);
punchBtn.addEventListener('click', revealPunchline);

function generateJoke() {
    randomNum = Math.floor(Math.random() * jokes.length);
    console.log(randomNum);
    joke.textContent = jokes[randomNum].joke;
    punchline.style.visibility = "hidden"
}

function revealPunchline() {
    punchline.textContent = jokes[randomNum].punchline;
    punchline.style.visibility = "visible"
    
}