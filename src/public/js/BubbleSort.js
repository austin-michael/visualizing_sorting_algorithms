class BubbleSort {
    constructor (unsortedArray) {
        this.unsortedArray = unsortedArray;

        this.sort(unsortedArray);
    }

    sort (unsortedArray) {
        console.log(unsortedArray);

        var isSorted = false;
        while (!isSorted) {
            isSorted = true;
            for (var i = 0; i < unsortedArray.length - 1; i++){
                if (unsortedArray[i] > unsortedArray[i + 1]) {
                    this.swap(unsortedArray, i, i + 1);
                    isSorted = false
                }
            }
        }

        console.log(unsortedArray)
    }

    swap (unsortedArray, i, j) {
        var temp = unsortedArray[i];
        unsortedArray[i] = unsortedArray[j];
        unsortedArray[j] = temp;
    }
}