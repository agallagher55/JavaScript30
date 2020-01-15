// const results = document.querySelector('.results p')
const buttons = document.querySelectorAll('button')

// results.textContent = "IT WORKS"

const targetKeys = ['KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK']
let sounds = ['boom.wav', 'clap.wav', 'hihat.wav', 'kick.wav', 'openhat.wav',
                'ride.wav', 'snare.wav', 'tink.wav', 'tom.wav']
sounds = sounds.map(x => 'sounds/' + x);

let keyMap = {}

targetKeys.forEach(function(key, index) {
    keyMap[key] = sounds[index]
});
console.log(keyMap)

const playMusic = function(e){
    e.preventDefault()
    key = e.code;

    if (targetKeys.includes(key)) {
        // results.textContent = key;
        const audio = new Audio(keyMap[key])
        audio.play()

    }
    else {
        console.log(`You pressed: ${key}`)
        // results.textContent = '...';
    }
}

const highlightButton = async function(e) {
    console.log("highlight button function")
    // Which button was pressed? 
    // Get key Letter
    // The index of that letter in key list will tell you what button to highlight
    const key = e.code;
    if (targetKeys.includes(key)) {
        const keyIndex = targetKeys.indexOf(key)
        buttons[keyIndex].classList.add('button-highlight')
    }
}

const unhighlightButton = function(e) {
    const key = e.code;
    if (targetKeys.includes(key)) {
        const keyIndex = targetKeys.indexOf(key)
        buttons[keyIndex].classList.remove('button-highlight')
    }
}

document.addEventListener('keydown', playMusic)
document.addEventListener('keydown', highlightButton)
document.addEventListener('keyup', unhighlightButton)