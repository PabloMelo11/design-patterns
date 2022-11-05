import InputText from '../../../src/behavioral/observer/InputText';
import Label from '../../../src/behavioral/observer/Label';

describe('Observer Pattern', function () {
  test('Deve criar um componente normal', function () {
    const inputText = new InputText('country');
    const label = new Label('Pais: {{ country }}');
    inputText.setValue('Brasil');
    label.setValue('country', 'Brasil');
    expect(label.getValue()).toBe('Pais: Brasil');
  });

  test('Deve criar um componente reativo', function () {
    const inputText = new InputText('country');
    const label = new Label('Pais: {{ country }}');
    inputText.register(label);
    inputText.setValue('Brasil');
    expect(label.getValue()).toBe('Pais: Brasil');
  });
});
