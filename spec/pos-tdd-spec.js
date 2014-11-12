/**
 * Created by liu on 11/8/14.
 */


describe('pos', function () {
    var allItems;
    var inputs;

    beforeEach(function () {
        allItems = loadAllItems();

    });

    it('should print an single item basic info  name/barcode/price/amount/unit/cost' +
        ' when given several  barcode inputs of the same', function () {
        inputs = [
            'ITEM000001',
            'ITEM000001',
            'ITEM000001'
        ];
        spyOn(console, 'log');

        printInventory(inputs);

        var expectText =
            '名称：雪碧，数量：3瓶，单价：3.00(元)，小计：9.00(元)\n';

        expect(console.log).toHaveBeenCalledWith(expectText);

    });

    it('test2: should print a string included multi items info when given several barcode , ' +
        'specially someone is with count', function(){
        inputs = [
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000001',
            'ITEM000003-2',
            'ITEM000005',
            'ITEM000005',
            'ITEM000005'
        ];

        spyOn(console, 'log');


        printInventory(inputs);

//        care about the output
//        no need to fix expectText 100%, your thought and code are first.
        var expectText =
            '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：15.00(元)\n' +
            '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n' +
            '名称：方便面，数量：3袋，单价：4.50(元)，小计：13.50(元)\n';

        expect(console.log).toHaveBeenCalledWith(expectText);

    });
});
