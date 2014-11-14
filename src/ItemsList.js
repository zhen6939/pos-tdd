/**
 * Created by liu on 11/12/14.
 */
function ItemsList(){
    this.contents = [];
    this.payItems = [];
    this.promotItems = [];
}

//Advise:
// think about that modify this add method
// by adding a num parameter as input for adding same type multi items
ItemsList.prototype.add = function (singleItem){
    for (var j= 0; j<this.contents.length; j++){
        if (this.contents[j].barcode == singleItem.barcode){
            this.contents[j].addCount(1);
            return;
        }
    }
    this.contents.push(singleItem);
}


ItemsList.prototype.parsePayItemsAndPromotionItems = function(promotType, promotInfo){

    for (var i=0; i<promotInfo.length; i++){
        if (promotInfo[i].type == promotType){
            var promotItemIndex = promotInfo[i].barcodes;
            break;
        }
    }

    if (promotType == 'BUY_TWO_GET_ONE_FREE'){
        for (var j=0; j<this.contents.length; j++){
            if (promotItemIndex.contains(this.contents[j].barcode)){
                var promotNum = (this.contents[j].count - (this.contents[j].count % 3)) / 3;
                var promotTotPrice = promotNum * this.contents[j].price;
                this.promotItems.push({
                    name: this.contents[j].name,
                    unit: this.contents[j].unit,
                    count: promotNum,
                    saving:promotTotPrice
                });
                this.payItems.push({
                    name: this.contents[j].name,
                    count: this.contents[j].count,
                    unit: this.contents[j].unit,
                    price: this.contents[j].price,
                    totPrice: this.contents[j].totPrice - promotTotPrice
                });
            }else{
                this.payItems.push({
                    name: this.contents[j].name,
                    count: this.contents[j].count,
                    unit: this.contents[j].unit,
                    price: this.contents[j].price,
                    totPrice: this.contents[j].totPrice
                });
            }
        }
    }
}
