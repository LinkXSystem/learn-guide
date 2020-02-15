/**
 * @description 适配器模式，将两个不相关的类实现组合调用，但是又不互相污染
 */

interface Loin {
  roar: Function;
}

class AfricanLion implements Loin {
  roar() {}
}

class Hunter {
  hunt(loin: Loin) {
    loin.roar();
  }
}

class WildDog {
  bark() {}
}

class WildDogAdapter implements Loin {
  dog: WildDog;

  constructor(dog: WildDog) {
    this.dog = dog;
  }

  roar() {
    this.dog.bark();
  }
}

(function() {
  const dog = new WildDog();
  const adapter = new WildDogAdapter(dog);

  const hunter = new Hunter();
  hunter.hunt(adapter);
})();
