

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


function seqOrSame(tileArr) {
    if (tileArr[0].number == tileArr[1].number) {
        return 'same';
    } else {
        return 'seq';
    }
}


function seqValid(tileArr) {
    var currNumber = tileArr[0].number;
    var seqColor = tileArr[0].color;
    for (var i = 1; i<tileArr.length; i++) {
        if (tileArr[i].color != seqColor) {
            return 'error';
        } else {
            if (tileArr[i].number - currNumber != 1) {
                return 'error';
            } else {
                currNumber = tileArr[i].number;
            }
        }
    }
    return 'valid';
}

function sameValid(tileArr) {
    var colorArr = [tileArr[0].color];
    var currNumber = tileArr[0].number;
    for (var i=1; i<tileArr.length; i++) {
        if (tileArr[i].number != currNumber) {
            return 'error';
        } else {
            if (colorArr.indexOf(tileArr[i].color) != -1) {
                return 'error';
            } else {
                colorArr.push(tileArr[i].color);
            }
        }
    }
    return 'valid';
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

var testArray = [15,28,41,54];
var testArray = [2,3,17];
var testTiles = [];
for (var i = 0; i<testArray.length; i++) {
    testTiles.push(tiles[testArray[i]-1]);
}

console.log(testTiles);

console.log(replaceSeqWilds(testTiles));

console.log(seqOrSame(testTiles));
console.log(sameValid(testTiles));
console.log(seqValid(testTiles));



