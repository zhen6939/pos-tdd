function Item(name, barcode, unit, price) {
    this.name = name;
    this.barcode = barcode;
    this.unit = unit;
    this.price = price || 0.00;
}
