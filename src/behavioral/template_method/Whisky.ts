import TaxItem from './TaxItem';

export default class Whisky extends TaxItem {
  constructor(readonly description: string, readonly price: number) {
    super('Beer', description, price);
  }

  calculateTaxes(): number {
    return this.price * 0.2;
  }
}
