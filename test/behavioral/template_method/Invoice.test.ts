import Beer from '../../../src/behavioral/template_method/Beer';
import Invoice from '../../../src/behavioral/template_method/Invoice';
import Item from '../../../src/behavioral/template_method/Item';
import Water from '../../../src/behavioral/template_method/Water';
import Whisky from '../../../src/behavioral/template_method/Whisky';

describe('Pattern Template Method', function () {
  test('Dve criar uma nota fiscal e calcular os impostos', function () {
    const invoice = new Invoice();
    invoice.addItem(new Beer('Heineken', 10));
    invoice.addItem(new Whisky('Jack Daniels', 100));
    invoice.addItem(new Water('VOSS', 5));
    const taxes = invoice.calculateTaxes();
    expect(taxes).toBe(21);
  });
});
