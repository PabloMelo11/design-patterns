import ParkingLot from '../../../src/behavioral/strategy/ParkingLot';
import BeachTicketCalculator from '../../../src/behavioral/strategy/BeachTicketCalculator';
import ShoppingTicketCalculator from '../../../src/behavioral/strategy/ShoppingTicketCalculator';
import AirportTicketCalculator from '../../../src/behavioral/strategy/AirportTicketCalculator';

describe('Pattern Strategy', function () {
  test('Deve criar um estacionamento', function () {
    const capacity = 500;
    const parkingLot = new ParkingLot(capacity, 'beach');
    expect(parkingLot.getEmptySpaces()).toBe(500);
  });

  test('Deve entrar um carro', function () {
    const capacity = 500;
    const parkingLot = new ParkingLot(capacity, 'beach');
    parkingLot.checkin('AAA-8888', new Date('2021-03-01T10:00:00'));
    expect(parkingLot.getEmptySpaces()).toBe(499);
  });

  test('Deve sair um carro', function () {
    const capacity = 500;
    const parkingLot = new ParkingLot(capacity, 'beach');
    parkingLot.checkin('AAA-8888', new Date('2021-03-01T10:00:00'));
    parkingLot.checkout('AAA-8888');
    expect(parkingLot.getEmptySpaces()).toBe(500);
  });

  test('Deve calcular o total a pagar do estacionamento na praia, 10 reais por hora', function () {
    const capacity = 500;
    const parkingLot = new ParkingLot(capacity, 'beach');
    parkingLot.checkin('AAA-8888', new Date('2021-03-01T10:00:00'));
    const ticket = parkingLot.calculateTicket(
      'AAA-8888',
      new Date('2021-03-01T12:00:00')
    );
    parkingLot.checkout('AAA-8888');
    expect(ticket.price).toBe(20);
  });

  test('Deve calcular o total a pagar do estacionamento no shopping, as primeiras 3 horas custam 10 reais e as horas seguintes custam 10 reais', function () {
    const capacity = 500;
    const parkingLot = new ParkingLot(capacity, 'shopping');
    parkingLot.checkin('AAA-8888', new Date('2021-03-01T10:00:00'));
    const ticket = parkingLot.calculateTicket(
      'AAA-8888',
      new Date('2021-03-01T15:00:00')
    );
    parkingLot.checkout('AAA-8888');
    expect(ticket.price).toBe(30);
  });

  test('Deve calcular o total a pagar do estacionamento no aeroporto, com taxa única de 30 reais', function () {
    const capacity = 500;
    const parkingLot = new ParkingLot(capacity, 'airport');
    parkingLot.checkin('AAA-8888', new Date('2021-03-01T10:00:00'));
    const ticket = parkingLot.calculateTicket(
      'AAA-8888',
      new Date('2021-03-01T15:00:00')
    );
    parkingLot.checkout('AAA-8888');
    expect(ticket.price).toBe(30);
  });
});
