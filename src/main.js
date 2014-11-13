/**
 * Created by liu on 11/8/14.
 */


function printInventory(inputs){
    var allItems = loadAllItems();
    var itemsList = new ItemsList();

    for (var i=0; i<inputs.length; i++){
        var singleItem = new ItemBasicInfo(inputs[i], allItems);
        itemsList.add(singleItem);
    }

//   extrat the part of printing as a class Output
    var op = new Output();
    op.setPayItems(itemsList);

    return op.print();
}
