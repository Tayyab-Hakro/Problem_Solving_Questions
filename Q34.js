var twoEggDrop = function(n) {
    let x = 1;
    while ((x * (x + 1)) / 2 < n) {
        x++;
    }
    return x;
};
