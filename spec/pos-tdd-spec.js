/**
 * Created by liu on 11/8/14.
 */
describe('POS-TDD', function(){

    it('should return an item basic info class included name/barcode/unit/price/amount/cost when the inputs have the same barcode ', function(){
        var inputs = 'ITEM000001',
            expectedResult = {name: '雪碧', barcode: 'ITEM000001', unit: '瓶', price: 3, amount: 3, cost: 9};
// ['ITEM000001','ITEM000001','ITEM000002'],
        var allItemsInfo = loadAllItems();
        var result = new ItemBasicInfo(inputs, allItemsInfo);
        expect(result.toString()).toEqual(expectedResult.toString());
    });
});
