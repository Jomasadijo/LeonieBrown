/* ========================================================================= */
/* VIDEO POPUP FUNCTION */
/* ========================================================================= */
function videoPopup() {

    $('.play').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: true,

        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com',
                    id: function (url) {
                        // works for youtu.be links too
                        var regExp = /(?:youtube\.com.*v=|youtu\.be\/)([^&?/]+)/;
                        var match = url.match(regExp);
                        return match ? match[1] : null;
                    },
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                }
            }
        }
    });
}