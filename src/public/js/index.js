function genRandomArray(length, max) {
    return Array.apply(null, Array(length)).map(function () {
        return Math.round(Math.random() * max);
    });
}

let unsortedArray = genRandomArray(5, 100);

let bubblesort = new BubbleSort(unsortedArray);