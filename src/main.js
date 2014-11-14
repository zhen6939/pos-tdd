/**
 * Created by liu on 11/8/14.
 */


function printInventory(inputs, promotionType){
    var allItems = loadAllItems();
    var itemsList = new ItemsList();
    for (var i=0; i<inputs.length; i++){
        var singleItem = new ItemBasicInfo(inputs[i], allItems);
        itemsList.add(singleItem);
    }

    var op = new Output();
    if (promotionType != undefined){  //check if promotion is available
        var promotionInfo = loadPromotions();
        itemsList.parsePayItemsAndPromotionItems(promotionType, promotionInfo);

        op.setPromotType(promotionType);
        op.setPayItems(itemsList);
        op.setPromotItems(itemsList);
    }else{
        op.setContents(itemsList);
    }

    return op.print();
}
