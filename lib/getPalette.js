function getData() {
    return ['#ccc', '#666', '#999'];
}

module.exports = function(fetch) {
    fetch = fetch || getData(); 
    var palette = fetch;

    if(!Array.isArray(palette)) {
        throw new Error("Palette is not an array");
    }

    return palette;
}