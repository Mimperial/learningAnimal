var elms = ['track', 'timer', 'duration', 'playBtn',
    'pauseBtn', 'prevBtn', 'nextBtn', 'playlistBtn',
    'volumeBtn', 'progress', 'bar', 'wave', 'loading',
    'playlist', 'list', 'volume', 'barEmpty', 'barFull', 'sliderBtn'];
elms.forEach(function(elm) {
    window[elm] = document.getElementById(elm);
});