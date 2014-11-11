/**
 * Created by liu on 11/8/14.
 */
function ItemBasicInfo (input, allItemsInfo){
    for (var i = 0; i <= allItemsInfo.length; i++){
        if (allItemsInfo[i].barcode == input){
            return  (
              function ItemBasicInfo(name,barcode,unit,price){
              this.name = allItemsInfo[i].name;
              this.barcode = allItemsInfo[i].barcode;
              this.unit = allItemsInfo[i].unit;
              this.price = allItemsInfo[i].price;
            }
            )
        }
    }
}
