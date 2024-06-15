var pages = document.getElementsByClassName('page');
var forward = new Audio('./sounds/forward.wav')
var backward = new Audio('./sounds/backward.wav')

var song1 = new Audio('./songs/birthday-song.mp3')

for (var i = 0; i < pages.length; i++) {
    var page = pages[i];
    if (i % 2 === 0) {
        page.style.zIndex = (pages.length - i);
    }
}

document.addEventListener('click',function(){
    song1.play();
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

