/**
 * Created by liu on 11/8/14.
 */
describe('POS-TDD', function(){
    it('should return an item basic info class included name/barcode/unit/price when given a barcode', function(){
        var input = 'ITEM000001', expectedResult = {name: '雪碧', barcode: 'ITEM000001', unit: '瓶', price: 3}
        var allItemsInfo = loadAllItems();

        //var result = new ItemBasicInfo(input, allItemsInfo);
        var result = ItemBasicInfo(input, allItemsInfo);
        expect(result).toEqual(expectedResult);
    });

});
