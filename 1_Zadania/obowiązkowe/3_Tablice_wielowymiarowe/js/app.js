// Zadanie 0.
function checkArray(arr) {
    checked = [];

    for (let i = 0; i < arr.length; i++) {
        let check = true;
        for (let k = 0; k < arr[i].length; k++) {
            if (arr[i][k] % 2 != 0) {
                check = false;
                break;
            }
      }
        checked.push(check);
    }

    return checked;
}

checkArray( [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
]);


// Zadanie 1.
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];

console.log(task1Array[3][2]);
console.log(task1Array[1].length);
console.log(task1Array[4][2]);


// Zadanie 2.
var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

for (let i = 0; i < task2Array.length; i++) {
    console.log(task2Array[i]);
}

for (let i = 0; i < task2Array.length; i++) {
    console.log(task2Array[i].length);
}

for (let i = 0; i < task2Array.length; i++) {
    for (let k = 0; k < task2Array[i].length; k++) {
        console.log(task2Array[i][k]);
    }
}

// Zadanie 3.
function print2DArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let k = 0; k < array[i].length; k++) {
            console.log(array[i][k])
        }
    }
}

// Zadanie 4.
var table = [[1, 2], [0, 4, 6, 8], [4, 5, 6, 7, 8]];

print2DArray(table);

// Zadanie 5.
function create2DArray(rows, columns) {
    var firstTable = [];
    var number = 1;

    for (var i = 0; i < columns; i++) {
        var secondTable = [];

        for (var k = 0; k < rows; k++) {
            secondTable.push(number);
            number++;
        }

        firstTable.push(secondTable);
    }

    return firstTable;
}

create2DArray(4, 4);
