// audio.js

// Create an audio element
const audio = new Audio('dark-tales-147852.mp3');

// Set the audio properties
audio.loop = true; // Loop the audio
audio.volume = 0.5; // Set volume (adjustable)

// Attempt autoplay
document.addEventListener('DOMContentLoaded', () => {
    audio.play().catch((error) => {
        console.warn('Autoplay failed. Audio will play after user interaction.', error);
    });
});

// Play audio on user interaction if autoplay fails
document.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    }
});
