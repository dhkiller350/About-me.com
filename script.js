// script.js

// Adjust viewport scaling for mobile browsers
document.addEventListener("DOMContentLoaded", () => {
    const metaViewport = document.querySelector("meta[name=viewport]");

    if (!metaViewport) {
        const newMeta = document.createElement("meta");
        newMeta.name = "viewport";
        newMeta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
        document.head.appendChild(newMeta);
    } else {
        metaViewport.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
    }
});

// Detect and log screen size changes
window.addEventListener("resize", () => {
    console.log(`Width: ${window.innerWidth}, Height: ${window.innerHeight}`);
});
