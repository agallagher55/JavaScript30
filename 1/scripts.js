const results = document.querySelector('.results p')
results.textContent = "IT WORKS"

console.log(results)

const targetKeys = ['KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK']

// Populate results box with keyboard
document.addEventListener('keydown', function(e) {
    e.preventDefault()

    if (targetKeys.includes(e.code)) {
        results.textContent = e.code;
    }
    else {
        console.log(`You pressed: ${e.code}`)
        results.textContent = '';
    }

})

