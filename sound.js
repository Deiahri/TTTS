let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let sounds = {};

for(let char of alphabet) {
    sounds[char] = new Audio(`./audio/deiahri/${char}.ogg`);
    sounds[char].load();
}

function playSound(soundName) {
    sounds[soundName].load();
    sounds[soundName].play();
}
