import Period from './Period';
import TicketCalculator from './TicketCalculator';

export default class ShoppingTicketCalculator implements TicketCalculator {
  calculate(period: Period): number {
    let price = 10;
    const minHour = 3;
    const pricePerHour = 10;
    const extraHours = period.getDiffInHours() - minHour;
    if (extraHours > 0) {
      price += extraHours * pricePerHour;
    }
    return price;
  }
}
