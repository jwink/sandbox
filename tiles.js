

function replaceSeqWilds(tileArr) {
    var cleanArr = [];
    if (tileArr.length < 3) {return ['error', 'too few pieces']};
    for (var i = 0; i<tileArr.length; i++) {
        if (tileArr[i].type == 'wild') {
           if (i == 0) {
              var tempTile;
              if (tileArr[i+1].type == 'wild') {
                    tempTile = {id: tileArr[i].id,
                                number: tileArr[i+2].number -2,
                                type: tileArr[i].type,
                                color: tileArr[i+2].color};
              } else {
                    tempTile = {id: tileArr[i].id,
                                number: tileArr[i+1].number - 1,
                                type: tileArr[i].type,
                                color: tileArr[i+1].color};                  
              }
              if (tempTile.number < 1) {return ['error', 'wild less than 1']};
              cleanArr.push(tempTile);
           } else {
               var tempTile = {id: tileArr[i].id,
                               number: cleanArr[i-1].number + 1,
                               type: tileArr[i].type,
                               color: cleanArr[i-1].color};
                if (tempTile.number > 13) {return ['error', 'wild greater than 13']};               
                cleanArr.push(tempTile); 
           }
        } else {cleanArr.push(tileArr[i])};
    }
    return cleanArr;
}


var tiles = [];

var colors = [1, 2, 3,4];
var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];

var counter = 1;
for (var s=0; s<2; s++) {
    for (var i=0; i<colors.length; i++) {
        for (var n=0; n<numbers.length; n++) {
            var currTile = {id:counter, number:n+1, type: 'regular', color: i+1}
            counter += 1;
            tiles.push(currTile);
        }
    }
}    

var w1 = {id:counter, number:0, type: 'wild', color: 0};
var w2 = {id:counter+1, number:0, type: 'wild', color: 0};

tiles.push(w1);
tiles.push(w2);

//console.log(tiles);

var testArray = [2,105,4,11,12,13];
var testTiles = [];
for (var i = 0; i<testArray.length; i++) {
    testTiles.push(tiles[testArray[i]-1]);
}

console.log(testTiles);

console.log(replaceSeqWilds(testTiles));



