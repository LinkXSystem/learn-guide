interface Coffce {
  getCost: Function;
  getDescription: Function;
}

class SimpleCoffce implements Coffce {
  getCost() {
    return 10;
  }

  getDescription() {
    return 'Simple Coffce';
  }
}

class MilkCoffce implements Coffce {
  coffce: Coffce;

  price: number;

  constructor(coffce: Coffce) {
    this.coffce = coffce;
    this.price = 10;
  }

  getCost() {
    return this.coffce.getCost() + this.price;
  }

  getDescription() {
    return this.coffce.getDescription() + ' =milk=';
  }
}

(function() {
  const material = new SimpleCoffce();

  const coffce = new MilkCoffce(material);

  coffce.getCost();
  coffce.getDescription();
});
