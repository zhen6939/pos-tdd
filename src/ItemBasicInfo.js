/**
 * Created by liu on 11/11/14.
 */

function ItemBasicInfo(inputs, allItemInfo){
    this.name = null;
    this.barcode = null;
    this.unit = null;
    this.price = null;
    this.count = null;  //add two properties
    this.totPrice = null;

    for (var i in allItemInfo){
        if (inputs.contains(allItemInfo[i].barcode)){
            this.barcode = allItemInfo[i].barcode;
            this.name = allItemInfo[i].name;
            this.unit = allItemInfo[i].unit;
            this.price = allItemInfo[i].price;
            this.count = 1;
            this.totPrice = allItemInfo[i].price;
        }
    }
}


ItemBasicInfo.prototype.addCount = function(num){
    this.count += num;
    this.totPrice = this.count * this.price;
}

Array.prototype.contains = function (element) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == element) {
            return true;
        }
    }
    return false;
}

