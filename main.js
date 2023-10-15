// Function to generate a random short code
function generateShortCode() {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const codeLength = 6;
    let shortCode = '';
    
    for (let i = 0; i < codeLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        shortCode += characters.charAt(randomIndex);
    }
    
    return shortCode;
}
function shortenURL() {
    const originalLink = document.getElementById("original-link").value;
    const shortCode = generateShortCode();
    const shortLink = `https://${shortCode}`;
    const shortenedLinkContainer = document.getElementById("shortened-link");
    shortenedLinkContainer.innerHTML = `<p>Shortened Link: <a href="${shortLink}" target="_blank">${shortLink}</a></p>`;
}

document.getElementById("shorten-button").addEventListener("click", shortenURL);
