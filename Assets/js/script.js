// Global Variables
//
// Form
const form = document.querySelector('form');
//
// Inputs
const imgSrc = document.querySelector('#imgSrc');
const textUpper = document.querySelector('#textUpper');
const textLower = document.querySelector('#textLower');
//
// Holding area for memes
const memePen = document.querySelector("#memePen");
// Remove button
//
let rmvBtn;

function createMeme() {
    // Meme Wrapper
    const meme = document.createElement('div');
    meme.classList.add('memeWrapper');
    
    // Meme Image
    const memeImg = document.createElement('img');
    memeImg.classList.add('memeImg');
    memeImg.src = imgSrc.value;

    // Meme Text
    // Upper
    const memeTextUpper = document.createElement('p');
    memeTextUpper.classList.add('memeTextUpper');
    memeTextUpper.innerText = textUpper.value;
    // Lower
    const memeTextLower = document.createElement('p');
    memeTextLower.classList.add('memeTextLower');
    memeTextLower.innerText = textLower.value;

    // Remove button
    rmvBtn = document.createElement('button');
    rmvBtn.classList.add('rmvBtn');
    rmvBtn.innerText = 'x';
    
    // Remove meme when remove button clicked
    rmvBtn.addEventListener('click', function(e) {
        rmvBtn.parentElement.remove();
    })

    // Add elements to meme
    meme.appendChild(rmvBtn);
    meme.appendChild(memeImg);
    meme.appendChild(memeTextUpper);
    meme.appendChild(memeTextLower);
    

    // Add meme to memePen
    memePen.appendChild(meme);
}

// Form submit
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const meme = createMeme();
    form.reset();
});

// // Remove button click
// // This didn't work and I couldn't figure out why
//     rmvBtn.addEventListener('click', function(e) {
//     // rmvBtn.parentElement.remove();
//     e.target.parentElement.remove();
// })