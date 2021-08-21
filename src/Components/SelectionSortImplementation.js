export function SelectionSortImplementation(mainArray) {

    var animation = [];

    console.log(mainArray.length)
    for (var i = 0; i < mainArray.length; i++) {
        var min = i;

        for (var j = i + 1; j < mainArray.length; j++) {

            if (mainArray[min] > mainArray[j]) {
                animation.push([min, j]);
                animation.push([min, j]);
                min = j;
                animation.push([min,mainArray[min]]);
            }
        }
            if (min !== i) {
                animation.push([min, i]);
                animation.push([min, i]);
                var temp = mainArray[i];
                mainArray[i] = mainArray[min];
                mainArray[min] = temp;
                animation.push([i,mainArray[i]]);
            }
            else{
                animation.push([min, i]);
                animation.push([min, i]);
                animation.push([min,mainArray[min]]);

            }
    }

    console.log("man ", mainArray)
    return animation

}