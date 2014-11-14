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
        new Promotion('BUY_TWO_GET_ONE_FREE', [
            'ITEM000005',
            'ITEM000001',
        ]),
        // watch out! One more promotion ~ enjoy it

//        loadPromotions() return a list included one or more than one Promotion class.
//        you don't need to change Promotion() name to Promotion1() or Promotion2(),
//        Promotion is fine!
        new Promotion('BUY_ONE_GET_ONE_FREE_V2',[
           'ITEM000005'
        ])
    ];
}
