app.factory('arDetector', function() {
    let isRelAR = false; // iOS
    let isWebAr = false; // android

    (function () {
        var a = document.createElement('a');
        if (a.relList.supports('ar')) {
            isRelAR = true;
        }
        document.documentElement.classList.add(isRelAR ? 'relar' : 'no-relar');
    })();

    return {
        isRelAR,
        isWebAr
    };
});