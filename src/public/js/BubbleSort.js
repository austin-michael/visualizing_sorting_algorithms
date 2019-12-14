class BubbleSort {
    constructor (unsortedArray) {
        this.unsortedArray = unsortedArray;

        this.drawBars(this.unsortedArray)
        this.sortedArray = this.sort(unsortedArray);
        //this.drawBars(this.sortedArray);
    }

    sort (data) {
        //console.log(unsortedArray);

        var isSorted = false;
        while (!isSorted) {
            isSorted = true;
            for (var i = 0; i < data.length - 1; i++){
                if (data[i] > data[i + 1]) {
                    this.swap(data, i, i + 1);
                    isSorted = false
                }
            }
        }

        //console.log(unsortedArray)
        return data;
    }

    swap (unsortedArray, i, j) {
        var temp = unsortedArray[i];
        unsortedArray[i] = unsortedArray[j];
        unsortedArray[j] = temp;
    }

    drawBars (data) {
        console.log(data);

        var scale = d3.scale.linear()
            .domain([0, d3.max(data)])
            .range([0, 420]);
        
        d3.select(".chart")
            .selectAll("div")
                .data(data)
            .enter().append("div")
                .style("width", function(d) { return scale(d) + "px"; })
                .text(function(d) { return d; })
        ;
    }
}