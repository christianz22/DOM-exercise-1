// Add the "big" class to the "grow-me" paragraph.
// Remove the "big" class from the "shrink-me" paragraph.
// Find all the <li>s and log their text content to the console.
// Set the href of the link to "https://www.example.com" and update the text to say "somewhere" instead of "nowhere".
// Set the "display" CSS property of the "hide-me" paragraph to "none".
// Set the "display" CSS property of the "show-me" paragraph to "block".
// Get the text that the user enters into the "name" input box and use it to set a welcome message in the <h1>, e.g., "Welcome Grant!".

function fun() {
    var g = document.getElementById("grow-me");
    g.classList.add("big");
}

function tiny() {
    var element = document.getElementById("shrink-me");
    element.classList.remove("big");
}

const list = document.querySelectorAll("li");
console.log(list);

// function changes() {
//     document.getElementsByClass("link").innerHTML = "Somewhere"
//     document.getElementsByClass("link").href = "https://www.example.com"
// }

var b = document.querySelector("a");
b.setAttribute("href", "https://www.example.com");
b.innerHTML = "somewhere";

let myElement = document.querySelector("#hide-me");
myElement.style.display = "none";

let myOtherElement = document.querySelector("#show-me");
myOtherElement.style.display = "block";

function main() {
    var name1 = document.getElementById("name").value;
    const h1 = document.querySelector('h1');
    if (name1 != '') {

        h1.innerHTML = "Welcome " + name1;

    }

}