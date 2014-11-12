/**
 * Created by liu on 11/12/14.
 */
function Output(){
    this.shopTitle = "***<没钱赚商店>购物清单***\n";
    this.payItemsStr = null;
}

Output.prototype.setPayItems = function(itemList){
    var result = '';
    for (var i=0; i<itemList.contents.length; ++i){
        result +=
            '名称：' + itemList.contents[i].name +
            '，数量：' + itemList.contents[i].count + itemList.contents[i].unit +
            '，单价：' + itemList.contents[i].price.toFixed(2) +
            '(元)，小计：' + itemList.contents[i].totPrice.toFixed(2) + '(元)\n';

    }
    this.payItemsStr = result;
}

Output.prototype.print = function(){
    return this.payItemsStr;
}


