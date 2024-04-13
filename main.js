
let inputText = document.getElementById("inputText");
let listContainer = document.getElementById("listContainer");
let addTask = function () {
    if (inputText.value === '') {
        let sound2 = new Audio();
        sound2.src = "./sound/try_5.mp3";
        sound2.play();
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputText.value;
        listContainer.appendChild(li);
        let Delet = document.createElement("i");
        Delet.className = "icon-bin2";
        li.appendChild(Delet);

    }
    inputText.value = "";
    saveData();
}
listContainer.addEventListener("click", function (el) {
    if (el.target.tagName === "LI") {
        el.target.classList.toggle("checked");
        saveData();
        sound.play()
    }
    else if (el.target.tagName === "I") {
        el.target.parentElement.remove();
    }


    saveData();
});


//save Data
function saveData() {
    localStorage.setItem("Data", listContainer.innerHTML);

}
function showData() {
    listContainer.innerHTML = localStorage.getItem("Data");

}
showData();
let sound = new Audio();
sound.src = "./sound/Y2meta.app - مدحت شلبي _ برافو عليك (128 kbps).mp3";