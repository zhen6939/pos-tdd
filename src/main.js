/**
 * Created by liu on 11/8/14.
 */
var input= 'ITEM000001';
var allItemsInfo = loadAllItems();

function ItemBasicInfo (input, allItemsInfo){
    for (var i = 0; i<=allItemsInfo.length; i++){
        if ( allItemsInfo[i].barcode == input ){
            var shoppingChart = new ShoppingChart(input , amount , price );
            return(shoppingChart);
        }
    }
}
var result = shoppingChart;
