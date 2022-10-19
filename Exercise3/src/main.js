const music1 = new Audio("./music/tom-1.mp3");
const music2 = new Audio("./music/tom-2.mp3");
const music3 = new Audio("./music/tom-3.mp3");
const music4 = new Audio("./music/tom-4.mp3");
const music5 = new Audio("./music/snare.mp3");
const music6 = new Audio("./music/crash.mp3");
const music7 = new Audio("./music/kick-bass.mp3");

const img1 = document.querySelectorAll(".img1");
const img2 = document.querySelectorAll(".img2");
const img3 = document.querySelectorAll(".img3");
const img4 = document.querySelectorAll(".img4");
const img5 = document.querySelectorAll(".img5");
const img6 = document.querySelectorAll(".img6");
const img7 = document.querySelectorAll(".img7");


img1.forEach(button => {
  button.addEventListener("click", () => {
    music1.play();
  });
});
img2.forEach(button => {
    button.addEventListener("click", () => {
      music2.play();
    });
});
img3.forEach(button => {
  button.addEventListener("click", () => {
    music3.play();
});
});
img4.forEach(button => {
    button.addEventListener("click", () => {
      music4.play();
    });
});
img5.forEach(button => {
    button.addEventListener("click", () => {
      music5.play();
    });
});
img6.forEach(button => {
    button.addEventListener("click", () => {
      music6.play();

    });
});
img7.forEach(button => {
    button.addEventListener("click", () => {
      music7.play();
    });
});


document.addEventListener('keydown', function(e) {
    switch(e.keyCode){
        case 87:
            music1.play();
            break;
        case 65:
            music2.play();
            break;
        case 83:
            music3.play();
            break;
        case 68:
            music4.play();
            break;
        case 74:
            music5.play();
            break;
        case 75:
            music6.play();
            break;
        case 76:
            music7.play();
            break;

        default:
    
    }

});