/**
 * Created by liu on 11/8/14.
 */

function printInventory(inputs){
    var allItems = loadAllItems();
    var singleitem = new ItemBasicInfo(inputs, allItems);
    singleitem.print();
}
