/*
Compare and update the inventory stored in a 2D array against a second 2D array of a
fresh delivery. Update the current existing inventory item quantities (in arr1). If an
item cannot be found, add the new item and quantity into the inventory array. The
returned inventory array should be in alphabetical order by item.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own
code.
*/

function updateInventory(arr1, arr2) {
    var invNames = [];
    var match = false;
    arr1.forEach(function (i) {
        invNames.push(i[1]);
    });
    arr2.forEach(function (item) {
        for (var i = 0; i < invNames.length; i++) {
            if (invNames[i].indexOf(item[1]) === 0) {
                arr1[i][0] += item[0];
                match = true;
                break;
            }
        }
        if (!match) {
            arr1.push([item[0], item[1]]);
        }
        match = false;
    });
    arr1.sort(function (a, b) {
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
        return 0;
    });
    return arr1;
}
// Example inventory lists
var curInv = [
            [21, "Bowling Ball"],
            [2, "Dirty Sock"],
            [1, "Hair Pin"],
            [5, "Microphone"]
        ];

var newInv = [[2, "Hair Pin"],
              [3, "Half-Eaten Apple"],
              [67, "Bowling Ball"],
              [7, "Toothpaste"]];

updateInventory(curInv, newInv);
