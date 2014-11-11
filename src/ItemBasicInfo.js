/**
 * Created by liu on 11/11/14.
 */
function ItemBasicInfo(inputs, allItemInfo){
    this.name = null;
    this.barcode = null;
    this.unit = null;
    this.price = null;

    for (var i in allItemInfo){
        if (inputs.contains(allItemInfo[i].barcode)){
            this.barcode = allItemInfo[i].barcode;
            this.name = allItemInfo[i].name;
            this.unit = allItemInfo[i].unit;
            this.price = allItemInfo[i].price;

        }
    }
}

ItemBasicInfo.prototype.print = function(){
    var printResult = '名称：' + this.name + '，条形码：' + this.barcode + '，单价：' + this.price.toFixed(2) + '（元），单位：' + this.unit;
    console.log(printResult);

}

Array.prototype.contains = function (element) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] == element) {
            return true;
        }
    }
    return false;
}

