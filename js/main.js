document.getElementById("switchButton").onclick = function () {
    document.getElementById("myBody").classList.toggle("dark");
};


var clickModal = document.getElementById('btnModal');
var frame = document.getElementById('search');
var clickClose = document.getElementById('close');

clickModal.onclick = function () {
    frame.classList.add('state-appear');
};

clickClose.onclick = function () {
    frame.classList.remove('state-appear');

};

