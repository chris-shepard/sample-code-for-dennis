
//fake api call
const x = true;

const getData = new Promise((resolve, reject) => {
    if (x) {
        setTimeout(() => {
            resolve("this is the data");
        }, 3000);
    } else {
        reject("something went wrong")
    };
});



//Set Up Event Listeners
let dataButton = document.getElementById("getButton");

dataButton.addEventListener('click', (e) => {
    e.preventDefault();
    let input = document.getElementById("fake-input");
    getData.then((result) => {
        input.innerHTML = result;
    }).catch((error) => {
        input.innerHTML = error;
    });
})