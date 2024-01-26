function isMobileDevice() {
    const mobileDeviceRegex = /(android|iphone|ipad|tablet|mobile)/i;
    return mobileDeviceRegex.test(navigator.userAgent);
}
window.addEventListener('load', function () {
    const lyricsButton = document.getElementById('showLyrics');
    if (isMobileDevice()) {
        // Disable the "See lyrics" button if the visitor is on a mobile device
        lyricsButton.style.display = 'none';
    }
});
