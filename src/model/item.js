function Item(barcode, name, unit, price) {
    this.name = name;
    this.barcode = barcode;
    this.unit = unit;
    this.price = price || 0.00;
}
