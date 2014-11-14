/**
 * Created by liu on 11/8/14.
 */


describe('pos', function () {
    var allItems;
    var inputs;

    beforeEach(function () {
        allItems = loadAllItems();

    });

    it('test1: should print an single item basic info  name/barcode/price/amount/unit' +
        ' when given 1 barcode', function () {
        inputs = [
            'ITEM000001'

        ];

        var result = printInventory(inputs);

        var expectText =
            '名称：雪碧，数量：1瓶，单价：3.00(元)，小计：3.00(元)\n';

        expect(result).toEqual(expectText);

    });


    it('test2: should print an single item basic info  name/barcode/price/amount/unit/cost' +
        ' when given several  barcode inputs of the same', function () {
        inputs = [
            'ITEM000001',
            'ITEM000001',
            'ITEM000001'
        ];

        var result = printInventory(inputs);

        var expectText =
            '名称：雪碧，数量：3瓶，单价：3.00(元)，小计：9.00(元)\n';

        expect(result).toEqual(expectText);

    });

    it('test3: should print a string included multi items info when given several barcode , ' +
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
        var result = printInventory(inputs);

//        care about the output
//        no need to fix expectText 100%, your thought and code are first
        var expectText =
            '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：15.00(元)\n'+
            '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n'+
            '名称：方便面，数量：3袋，单价：4.50(元)，小计：13.50(元)\n';

        expect(result).toEqual(expectText);

    });

//  thank you so much for your consideration, wisdom and kindness. ^_^


    it('test4:print a string included multiple items infomation and the promotion information\n'+
        'when given several barcode and the promotin information ', function(){
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
        var promotionType = 'BUY_TWO_GET_ONE_FREE';  //as input parameter
        var result = printInventory(inputs, promotionType);

        var expectText =
            '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n'+
            '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n'+
            '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n'+
            '赠送商品：\n'+
            '名称：雪碧，数量：1瓶\n'+
            '名称：方便面，数量：1袋\n';

        expect(result).toEqual(expectText);

        });


    it('test5: should return a string included payItems, promotionItems and account ' +
        'when given some barcodes and the promotion type', function(){
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
        var promotionType = 'BUY_TWO_GET_ONE_FREE';  //as input parameter
        var result = printInventory(inputs, promotionType);

        var expectText =
            '***<没钱赚商店>购物清单***\n' +
            '名称：雪碧，数量：5瓶，单价：3.00(元)，小计：12.00(元)\n'+
            '名称：荔枝，数量：2斤，单价：15.00(元)，小计：30.00(元)\n'+
            '名称：方便面，数量：3袋，单价：4.50(元)，小计：9.00(元)\n'+
            '----------------------\n' +
            '赠送商品：\n'+
            '名称：雪碧，数量：1瓶\n'+
            '名称：方便面，数量：1袋\n' +
            '----------------------\n' +
            '总计：51.00(元)\n' +
            '节省：7.50(元)\n' +
            '**********************';

        expect(result).toEqual(expectText);

    });




});
