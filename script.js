var pages = document.getElementsByClassName('page');
var player = document.querySelector('body');
var forward = new Audio('./sounds/forward.wav')
var backward = new Audio('./sounds/backward.wav')

var song1 = new Audio('./songs/birthday-song1.wav')
var song2 = new Audio('./songs/birthday-song2.wav')
var song3 = new Audio('./songs/birthday-song3.wav')
var song4 = new Audio('./songs/birthday-song4.wav')
var song5 = new Audio('./songs/birthday-song5.wav')

var songList = [song1, song2, song3, song4, song5]

var playerCount = 0;

for (var i = 0; i < pages.length; i++) {
    var page = pages[i];
    if (i % 2 === 0) {
        page.style.zIndex = (pages.length - i);
    }
}

document.addEventListener('click',function(){
   player.onclick = function(){
    song1.play(); 
   } 
})

document.addEventListener('DOMContentLoaded', function () {
    for (var i = 0; i < pages.length; i++) {
        // var page = pages[i];
        pages[i].pageNum = i + 1;
        pages[i].onclick = function () {
            if (this.pageNum % 2 === 0) {
                backward.play();
                this.classList.remove('flipped');
                this.previousElementSibling.classList.remove('flipped');
            }
            else {
                forward.play();
                this.classList.add('flipped');
                this.nextElementSibling.classList.add('flipped');
            }
        }
    }
})

