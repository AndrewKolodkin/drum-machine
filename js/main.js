let drums = document.getElementsByClassName( 'drum-kit__drum' );

function hit () {
 let currentSound = this.querySelector('audio');
 
 currentSound.pause();
 currentSound.currentTime = 0;
 currentSound.play();
}

for ( item of drums ) {
 item.addEventListener( 'click', hit );
}