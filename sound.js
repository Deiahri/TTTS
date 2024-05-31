let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let sounds = {};

let voice_options = document.getElementById('voice').children;


for(let voice of voice_options) {
    sounds[voice.value] = {};
    for(let char of alphabet) {
        sounds[voice.value][char] = new Audio(`./audio/${voice.value}/${char}.ogg`);
        sounds[voice.value][char].load();
    }
}
    

function playSound(soundName, voice) {
    sounds[voice][soundName].load();
    sounds[voice][soundName].play();
}
