/**
 * Created by liu on 11/8/14.
 */
function ItemBasicInfo (input, allItemsInfo){
    for (var i = 0; i <= allItemsInfo.length; i++){
        if (allItemsInfo[i].barcode == input){
            var shoppingItem = allItemsInfo[i];
            return shoppingItem;
        }
    }
}
