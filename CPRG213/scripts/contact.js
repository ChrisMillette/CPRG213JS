// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

const subClicked = document.getElementById('submit-button')
const final = document.getElementById('final')

function submitClicked() {
    form.remove()
    final.innerHTML = "Thank you for your message";
    final.style.fontSize = 24;
}

subClicked.addEventListener("click", testFunct() {
    submitClicked()
});?
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

