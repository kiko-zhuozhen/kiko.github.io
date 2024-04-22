var sound2 = new Howl (
    {
        src:['./audio/song.mp3'],
        volume:0.5,
        loop:false,
        autoplay:false,
        onend:function(){
            console.log('finished!');
        }
    }
);

function playSound() {
    sound2.play();
}

function controlSound(){
    return sound2.playing() ? sound2.pause() : sound2.play();
}

button1 = document.getElementById("button1");
button1.addEventListener("click", playSound);

button2 = document.getElementById("button2");
button2.addEventListener("click", controlSound);


var sound3 = new Howl (
    {
        src:['./audio/Banjodoline.mp3'],
        volume:0.5,
        loop:false,
        autoplay:false,
        onend:function(){
            console.log('finished!');
        }
    }
);

function playtheSound() {
    sound3.play();
}

function controltheSound(){
    return sound3.playing() ? sound3.pause() : sound3.play();
}

button3 = document.getElementById("button3");
button3.addEventListener("click", playtheSound);

button4 = document.getElementById("button4");
button4.addEventListener("click", controltheSound);

