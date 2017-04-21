


var arr = ['A', 'B', 'C', 'D', 'E'];

function currCombo(baseArr, eleArray, needed) {
    var currArray = [];
    var multArr = [];
    if (needed == 1) {
       for (var i=0; i<eleArray.length; i++) {
           var tempArr = [];
           for (var n=0; n<baseArr.length; n++) {
               tempArr.push(baseArr[n]);
           }
           tempArr.push(eleArray[i]);
           multArr.push(tempArr);

       }
       return multArr; 
       //console.log(currArray)
    }  else {
       loopCount = eleArray.length - needed + 1;
       console.log(loopCount);
       for (var i = 0; i< loopCount; i++) {
       }
       return currArray;
    }
    
}


function flattenComboArr(comboArr) {
   for (var i = 0; i< comboArr.length; i++) {
       console.log(comboArr[i]);
   }
}

var x = currCombo([],arr,3);

flattenComboArr(x);





