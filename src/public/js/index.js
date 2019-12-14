function genRandomArray(length, max) {
    return Array.apply(null, Array(length)).map(function () {
        return Math.round(Math.random() * max);
    });
}

let unsortedArray = genRandomArray(20, 20);

let bubblesort = new BubbleSort(unsortedArray);