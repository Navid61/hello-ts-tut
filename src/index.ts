type Base = "classic" | "thick" | "thin" | "garlic";

interface HasFormatter {
  format(): string;
}

abstract class MenuItem implements HasFormatter {
  constructor(private title: string, private price: number) {}

  get details(): string {
    return `${this.title} - $${this.price}`;
  }

  abstract format(): string;
}

class Pizza extends MenuItem {
  constructor(title: string, price: number) {
    super(title, price);
  }

  private base: Base = "classic";
  private toppings: string[] = [];

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }

  removeTopping(topping: string): void {
    this.toppings = this.toppings.filter((t) => t !== topping);
  }

  selectBase(b: Base): void {
    this.base = b;
  }

  format(): string {
    let formatted = this.details + '\n'
    //base
    formatted += `Pizza on a  ${this.base} base`
   
    if(this.toppings.length < 1){
        formatted += 'with no toppings'
    }

    if(this.toppings.length > 0){
        formatted += `with ${this.toppings.join(', ')}`
    }

    return formatted
  }
}

const pizza = new Pizza("mario special", 15);

function printFormatted(val: HasFormatter): void {
  console.log(val.format());
}

pizza.addTopping('mushroom')
pizza.addTopping('pepper')
printFormatted(pizza)
