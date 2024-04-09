var array1 = [12, 34, 56, 12, 67]
var array2 = ['js', 'java', 'c#', 'python']

// Todas as funções devem ser implementadas sem efeitos colaterais, isto é,
// elas não devem modificar o array de entrada (não são in-place).

function first(array, numero = 1) {

    var array2 = []
    for (let index = 0; index < numero; index++) {
        array2[index] = array[index];

    }
    if (array2[0] == undefined)
    {
        return []

    }
    return array2

}
function last(array, numero = 1) { 

    var index = 0
    var array2 = []
    for (var i = array.length - numero; i < array.length; i++) {
        array2[index] = array[i];
        index++
    }
    return array2

}

function tail(array) {
    
    var array2 = []
    for (var i = 1; i < array.length; i++) {
        array2[i - 1] = array[i];
    }
    return array2

}
function without(array, numero) {

    var array2 = []
    var index = 0; 
    for (var i = 0; i < array.length; i++) {
        if(array[i] == numero)
        {
            continue
        }
        array2[index] = array[i]
        index++;
    }
    return array2
 }
 
function union(array1, array2, ...rest) {  // [1,2], [3,4], [5,6], [7,8] = array1 = [1,2], array2 = [3, 4], rest = [[5,6], [7,8]]



    array3 = []
    array3
    for(var i = 0; i < array1.length; i++)
    {
        array3[i] = array1[i]
    } 
    array3 
    
    var index = 0;
    for(var i = array3.length; i < (array1.length + array2.length); i++)
    {
        array3[i] = array2[index]
        index++
 
    }
    array3

    var index = 0
    
    for(var i = array3.length; i < (array1.length + array2.length + rest.length); i++)
    {
        array3[i] = rest[index]
        index++
    }
    array3

    return array3
}


function em(array, elemento) {
    
    for (var index = 0; index < array.length; index++) {
        
        if(array[index] == elemento)
        {
            return true
        }
        
    }
    return false
}


function unique(array) {
    var array2 = []
    var index = 0;

    for(var i = 0; i < array.length; i++)    
    {
        if(em(array2, array[i]))
        {
            continue
        }
        array2[index] = array[i]
        index++
    } 
    return array2

}

function intersection(array1, array2) { 

    var array3 = []
    var index = 0;
    for(var i = 0; i < array1.length; i++)
    {
        if(em(array2, array1[i]) && !(em(array3, array1[i])))
        {
            array3[index] = array1[i]
            index++
        }

    }

    return array3
}

function difference(array1, array2) {
    var array3 = []
    var index = 0;
    
    for (var i = 0; i < array1.length; i++) {
        if (!em(array2, array1[i])) {
            array3[index] = array1[i]
            index++
        }

    }

    // for (var i = 0; i < array2.length; i++)
    // {
    //     if(!em(array1, array2[i]))
    //     {
    //         array3[index] = array2[i]
    //         index++
    //     }

    // }

    return array3
 }


function zip(array1, array2) {

    var array3 = []
    // []
    for(var i = 0; i < array1.length; i++)
    {
        array3[0] = array1[i]
        arrayTemp[1] = array2[i]
        array3[i] = arrayTemp
    }

    return array3
 }

function compact(array1) 
{
    var array2 = []
    var index = 0
    for(var i = 0; i < array1.length; i++)
    {
        if(array1[i] == null || array1[i] == undefined || Number.isNaN(array1[i]))
        {
            continue
        }
        array2[index++] = array1[i]
        
    }

    return array2
 }
 
function flatten() { }

function equals() { }

console.log(first(array1)) // 12
console.log(first(array1, 3)) // [12, 34, 56]
console.log(first([], 3)) // []

console.log(last(array1)) // 67
console.log(last(array1, 3)) // [56, 12, 67]

console.log(tail(array1)) // [34, 56, 12, 67]
console.log(tail([])) // []

console.log(without(array1, 34)) // [12, 56, 12, 67]
console.log(without(array1, 12)) // [34, 56, 67]

console.log(union(array1, array2)) // [12, 34, 56, 67, 'js', 'java', 'c#', 'python']
console.log(union(array1, array2, [89, 34, 'ruby', 'js'])) // [12, 34, 56, 67, 'js', 'java', 'c#', 'python', 89, 'ruby']

console.log(unique(array1)) // [12, 34, 56, 67]
console.log(unique(['a', 'a', 'a'])) // []
console.log(unique(['a', 'b', 'a', 'b'])) // ['a', 'b']
   // var array3 = []

    // for(var i = 0; i < array1.length; i++)
    // {
    //     array3[i][0] = array1[i]
    //     array3[i][1] = array2[i]
    // }
console.log(intersection(['a', 4, 'c', 8], [8, 'b', 'c', 34])) // ['c', 8]
console.log(intersection([8, 'a', 4, 'c', 8], [8, 'b', 'c', 34])) // [8, 'c']

console.log(difference(['a', 4, 'c', 8], [8, 'b', 'c', 34])) // ['a', 4]
console.log(difference([], array1)) // []
console.log(difference(array1, [])) // [12, 34, 56, 12, 67]
console.log(difference(array1, array2)) // [12, 34, 56, 12, 67]
console.log(difference(array1, [56, 67])) // [12, 34, 12]

console.log(zip([12, 45], [67, 90])) // [[12, 67], [45, 90]]
console.log(zip(array2, [67, 90, 52, 56])) // [['js', 67], ['java', 90], ['c#', 52], ['python', 56]]
console.log(zip(array1, [67, 90, 52, 56], ['brendan eich', 'james gosling', 'anders hejlsberg', 'guido van rossum']))
// [['js', 67, 'brendan eich'], ['java', 90, 'ja2], depth)) // [34, 54, 45, 23, 78, 90, 12]
console.log(flatten(nested, depth)) // [34, 54, 45, 23, 78, 90, [65], 12]12]
console.log(compact([NaN, 23, null, 12, undefined, 78])) // [23, 12, 78]
console.log(compact([NaN, 23, null, 12, undefined, 78, 0, false, ''])) // [23, 12, 78, 0, false, '']
console.log(compact(array1)) // [12, 34, 56, 12, 67]

var depth = 2 // profundidade
var nested = [34, 54, [45, 23, [78, 90, [65]]], 12]
console.log(flatten([34, 54, [45, 23], 12])) // [34, 54, 45, 23, 12]
console.log(flatten([34, 54, [45, 23], 12, [78, 90]])) // [34, 54, 45, 23, 12, 78, 90]
console.log(flatten([34, 54, [45, 23, [78, 90]], 12])) // [34, 54, 45, 23, [78, 90], 12]
console.log(flatten([34, 54, [45, 23, [78, 90]], 12], depth)) // [34, 54, 45, 23, 78, 90, 12]
console.log(flatten(nested, depth)) // [34, 54, 45, 23, 78, 90, [65], 12]
console.log(flatten(nested, 3)) // [34, 54, 45, 23, 78, 90, 65, 12]
console.log(flatten(array1)) // [12, 34, 56, 12, 67]

console.log(equals([1, 2, 3], [1, 2, 3])) // true
console.log(equals([1, 2, 3], [1, 3, 2])) // false
console.log(equals(array1, array2)) // false
console.log(equals([1, [2, 3], 4], [1, [2, 3], 4])) // true
console.log(equals([1, [2, 3], 4], [1, [3, 2], 4])) // false
console.log(equals(nested, nested)) // true
console.log(equals(nested, [34, 54, [45, 23, [78, 90, [65]]], 12])) // true
console.log(equals([34, 54, [45, 23, [78, 90, [65]]], 12], nested)) // true

console.log(array1) // [12, 34, 56, 12, 67]
console.log(array2) // ['js', 'java', 'c#', 'python']


c = [1, 2]
d = [3, 4]
z = [[c[0], d[0]], [c[1], d[1]]]
z
