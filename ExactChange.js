/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first
argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string
"Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.
*/
function checkCashRegister(price, cash, cid) {
    var totalDrawer = 0;
    for (var i = 0; i < cid.length; i++) {
        totalDrawer += cid[i][1];
    }
    var changeNeeded = cash - price;
    if (changeNeeded > totalDrawer) {
        return "Insufficient Funds";
    }
    if (changeNeeded === totalDrawer) {
        return "Closed";
    }
    var change = [];
    var x = changeNeeded;
    var bills = 0;
    var billsN = 0;
    var denom = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];
    for (i = 8; i >= 0; i--) {
        if (x >= denom[i]) {
            bills = Math.round(cid[i][1] / denom[i]);
            billsN = Math.floor(x / denom[i]);
            while (billsN > bills) {
                billsN--;
            }
            if (billsN <= bills && billsN !== 0) {
                x = parseFloat(Math.round((x - billsN * denom[i]) * 100) / 100).toFixed(2);
                change.push([cid[i][0], (billsN * denom[i])]);
            }
        }
    }
    if (x > 0) {
        return "Insufficient Funds";
    }
    return change;
}


// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
