function loadAllItems() {
    return [
        new Item('可口可乐', 'ITEM000000', '瓶', 3.00),
        new Item('雪碧', 'ITEM000001', '瓶', 3.00),
        new Item('苹果', 'ITEM000002', '斤', 5.50),
        new Item('荔枝', 'ITEM000003', '斤', 15.00),
        new Item('电池', 'ITEM000004', '个', 2.00),
        new Item('方便面', 'ITEM000005', '袋', 4.50)
    ];
}

function loadPromotions() {
    return [
        new Promotion1('BUY_TWO_GET_ONE_FREE', [
            'ITEM000000',
            'ITEM000001',
        ]),
        // watch out! One more promotion ~ enjoy it
        new Promotion2('BUY_ONE_GET_ONE_FREE',[
           'ITEM000005'
        ])
    ];
}
