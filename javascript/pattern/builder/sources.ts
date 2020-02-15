class Burger {
  size: number;

  cheese: boolean;
  pepperoni: boolean;
  lettuce: boolean;
  tomato: boolean;

  constructor(builder: BurgerBuilder) {
    this.size = builder.size;

    this.cheese = builder.cheese;
    this.pepperoni = builder.pepperoni;
    this.lettuce = builder.lettuce;
    this.tomato = builder.tomato;
  }
}

class BurgerBuilder {
  size: number;

  cheese: boolean;
  pepperoni: boolean;
  lettuce: boolean;
  tomato: boolean;

  constructor(size: number) {
    this.size = size;
  }

  isCheese(status: boolean) {
    this.cheese = status;
  }

  isPepperoni(status: boolean) {
    this.pepperoni = status;
  }

  isLettuce(status: boolean) {
    this.lettuce = status;
  }

  isTomato(status: boolean) {
    this.tomato = status;
  }

  getBurger() {
    return new Burger(this);
  }
}

(function() {
  const size = 10;

  const builder = new BurgerBuilder(size);

  builder.isCheese(true);

  builder.getBurger();
});
