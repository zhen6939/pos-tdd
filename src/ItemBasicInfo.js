/**
 * Created by liu on 11/11/14.
 */

function ItemBasicInfo(inputi, allItemInfo){
    this.name = null;
    this.barcode = null;
    this.unit = null;
    this.price = null;
    this.count = null;  //add two properties
    this.totPrice = null;

    for (var i in allItemInfo){
        if ( inputi == allItemInfo[i].barcode){
            this.barcode = allItemInfo[i].barcode;
            this.name = allItemInfo[i].name;
            this.unit = allItemInfo[i].unit;
            this.price = allItemInfo[i].price;
            this.count = 1;
            this.totPrice = allItemInfo[i].price;
        }else{
            if(inputi.indexOf('-') != -1 && inputi.split('-')[0]== allItemInfo[i].barcode) {
            this.barcode = allItemInfo[i].barcod;
            this.name = allItemInfo[i].name;
            this.unit = allItemInfo[i].unit;
            this.price = allItemInfo[i].price;
            this.count = parseInt(inputi.split('-')[1]);
            this.totPrice = allItemInfo[i].price*this.count;
          }

        }
    }
}

ItemBasicInfo.prototype.addCount = function(num){
    this.count += num;
    this.totPrice = this.count * this.price;
};

Array.prototype.contains = function (element) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == element) {
            return true;
        }
    }
    return false;
};
// look at the function below.It's useless here.
// I meant to wrap the parse of input with '-'.
// but I don't know whether it is right,
// and how to call this function and use the return in the object ItemBasicInfo ?
// If time is plenty,could you tell how to make it?
ItemBasicInfo.prototype.parseInput = function (input){
  var symbol = '-';
  if(input.indexOf(symbol) != -1){
    var parsedInput = input.split(symbol);
    return parsedInput;
  }
};
