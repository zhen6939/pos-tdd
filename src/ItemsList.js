/**
 * Created by liu on 11/12/14.
 */
function ItemsList(){
    this.contents = [];
}

//Advise:
// think about that modify this add method
// by adding a num parameter as input for adding same type multi items
ItemsList.prototype.add = function (singleItem){
    for (var j= 0; j<this.contents.length; ++j){
        if (this.contents[j].barcode = singleItem.barcode){
            this.contents[j].addCount(1);
            return;
        }
    }
    this.contents.push(singleItem);
}

