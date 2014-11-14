/**
 * Created by liu on 11/12/14.
 */
function Output(){
    this.shopTitle = "***<没钱赚商店>购物清单***\n";
    this.payItemsStr = null;
    this.promotTitle = '赠送商品：\n';
    this.promotItemsStr = null;
    this.promotType = null;
    this.contensStr = null;
}

Output.prototype.setPromotType = function(promotType){
    this.promotType = promotType;
}

Output.prototype.setPayItems = function(itemList){
    var result = '';
    for (var i=0; i<itemList.payItems.length; ++i){
        result +=
            '名称：' + itemList.payItems[i].name +
            '，数量：' + itemList.payItems[i].count + itemList.payItems[i].unit +
            '，单价：' + itemList.payItems[i].price.toFixed(2) +
            '(元)，小计：' + itemList.payItems[i].totPrice.toFixed(2) + '(元)\n';

    }
    this.payItemsStr = result;
}

Output.prototype.setPromotItems = function(itemList){
    var result = '';
    for (var i=0; i<itemList.promotItems.length; i++){
        result += '名称：' + itemList.promotItems[i].name +
                '，数量：' + itemList.promotItems[i].count + itemList.promotItems[i].unit + '\n';
    }
    this.promotItemsStr = result;
}

Output.prototype.setContents = function(itemList){
    var result = '';
    for (var i=0; i<itemList.contents.length; ++i){
        result +=
            '名称：' + itemList.contents[i].name +
            '，数量：' + itemList.contents[i].count + itemList.contents[i].unit +
            '，单价：' + itemList.contents[i].price.toFixed(2) +
            '(元)，小计：' + itemList.contents[i].totPrice.toFixed(2) + '(元)\n';

    }
    this.contensStr = result;
}



Output.prototype.print = function(){
    if (this.promotType == 'BUY_TWO_GET_ONE_FREE'){
        return this.payItemsStr + this.promotTitle + this.promotItemsStr;
//        return '11111'
    }
    else if(this.promotType == null){
        return this.contensStr;
//        return '22222'
    }

}


