/**
 * Created by liu on 11/8/14.
 */
function ItemBasicInfo(input, allItemInfo){
    this.name = null;
    this.barcode = null;
    this.unit = null;
    this.price = null;

    for (var i in allItemInfo){
        if (allItemInfo[i].barcode == input){
            this.barcode = input;
            this.name = allItemInfo[i].name;
            this.unit = allItemInfo[i].unit;
            this.price = allItemInfo[i].price;
        }
    }
}
