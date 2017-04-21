

function getCombos(arr, needed) {
    if (needed == 1) {
        var retArr = [];
        for (var i=0; i<arr.length; i++) {
          retArr.push(arr[i]);
        }
        return retArr;    
    } else {
        var loopCount = arr.length - needed + 1;
        var retArr=[];
        for (var i=0; i<loopCount; i++) {
           var cp1 = arr.slice(i,i+1);
           var tempArr = arr.slice(i+1,arr.length);
           var callBack = getCombos(tempArr, needed-1);
           for (var n=0; n< callBack.length; n++) {
               retArr.push(cp1[0] + callBack[n]);
           }
        }
        return retArr;
    }
}

var tempArr = ['A', 'A', 'C', 'D', 'E'];

x = getCombos(tempArr, 5);
console.log(x);
x = getCombos(tempArr, 4);
console.log(x);
x = getCombos(tempArr, 3);
console.log(x);
x = getCombos(tempArr, 2);
console.log(x);
x = getCombos(tempArr, 1);
console.log(x);


