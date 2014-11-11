/**
 * Created by liu on 11/8/14.
 */

describe('pos', function () {
    var allItems;
    var inputs;

    beforeEach(function () {
        allItems = loadAllItems();

    });

    it('should print an single item basic info  name/barcode/unit/price when given a barcode array', function () {
        inputs = [
            'ITEM000001'
        ];
        spyOn(console, 'log');

        printInventory(inputs);

        var expectText =
            '名称：雪碧，条形码：ITEM000001，单价：3.00（元），单位：瓶';

        expect(console.log).toHaveBeenCalledWith(expectText);
    });
});
