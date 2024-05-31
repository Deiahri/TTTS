

let delay = 150;
function convertToSpeech(text, index=0) {
    let additionalDelay = 0;
    if(index >= text.length) {
        return;
    }
    let char = text[index];
    if(char.trim() == '') {
        additionalDelay+= 50;
    } else if (char == ',' || char == ':' || char == ';') {
        additionalDelay = 300;
    } else if (char == '.' || char == '!' || char == '?') {
        additionalDelay = 500;
    } else {
        playSound(char);
    }
    setTimeout(convertToSpeech.bind(null, text, index+1), delay+additionalDelay);
}






// let alpha = 'abcdefghijklmnopqrstuvwxyz';

// let out = '';
// for(let char of alpha) {
//     out+= '\''+char+'\', ';
// }

// console.log(out);