const generateInput = document.querySelector(".generatorInput");
const generateBtn = document.querySelector(".generatorBtn");
const showValue = document.querySelector(".ShowValue");
const submitBtn = document.querySelector(".submitBtn");
const notyfySection = document.querySelector(".notyfySection");
const correctPin = document.querySelector(".correctPin");
const wrongPin = document.querySelector(".wrongPin");
const removeElement = document.querySelector("#removeBtn");
const tryValue = document.querySelector("#tryLeft");
let newTryValue = parseInt(tryValue.innerText);



function generatePin() {
    let randomPin = Math.floor(Math.random() * 9000 + 1000);
    generateInput.value = randomPin;
}

generateBtn.addEventListener("click", generatePin);


function inputValue(number) {
    if (generateInput.value === "") {
        alert("Please Click Generate Pin First")
    } else {
        showValue.value += number;
    }

    if (number === "C") {
        clearBtn();
    }
}

function checkPin() {
    let newPin = generateInput.value;
    if (newPin === showValue.value) {
        correctNotification ();
    } else {
        wrongNotification ();
        tryLeft();
    }
}

function correctNotification () {
    notyfySection.style.display = "block";
    correctPin.style.display = "block";
    wrongPin.style.display = "none";
    submitBtn.disabled = true;
    submitBtn.style.backgroundColor = "green";
    generateBtn.disabled = true;
    generateBtn.style.backgroundColor= "green";
}

function wrongNotification () {
    notyfySection.style.display = "block";
    correctPin.style.display = "none";
    wrongPin.style.display = "block";
}

function removeNotification () {
    notyfySection.style.display = "none";
}

function clearBtn() {
    showValue.value = "";
}

function tryLeft() {
    if (newTryValue > 0) {
        newTryValue = newTryValue - 1;
    }
    tryValue.innerHTML = newTryValue;

    if (newTryValue == 0) {
        submitBtn.disabled = true;
        submitBtn.style.backgroundColor = "red";
        generateBtn.disabled = true;
        generateBtn.style.backgroundColor= "red";
    }

}

// remove element

function removeItem() {
    if (showValue !== "") {
        let currentValue = showValue.value;
        showValue.value = currentValue.slice(0, -1)
    }
}

submitBtn.addEventListener("click", checkPin,);

removeNotification ();

removeElement.addEventListener("click", removeItem)

