/*
No repeats please
Return the number of total permutations of the provided string that don't have repeated consecutive letters.
Assume that all characters in the provided string are each unique.

For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but
only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/

function permAlone(str) {
    var perms = [];
    var arr = str.split("");
    heapsPermute(perms, arr, isRepeat);
    return perms.length;
}

var swap = function (array, pos1, pos2) {
    var temp = array[pos1];
    array[pos1] = array[pos2];
    array[pos2] = temp;
};

var heapsPermute = function (perms, array, output, n) {
    n = n || array.length;
    if (n === 1) {
        output(array, perms);
    } else {
        for (var i = 1; i <= n; i += 1) {
            heapsPermute(perms, array, output, n - 1);
            if (n % 2) {
                var j = 1;
            } else {
                var j = i;
            }
            swap(array, j - 1, n - 1);
        }
    }

};

var isRepeat = function (input, perms) {
    var str = input.join();
    str = str.replace(/,/g, "");
    str = str.match(/(.)\1/g);
    if (str === null) {
        perms.push(input);
    }
};


permAlone('aabb');
