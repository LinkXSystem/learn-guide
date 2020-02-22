abstract class AnimalOperation {
  abstract visitMonkey(monkey: Monkey);
}

abstract class Animal {
  abstract accept(operation: AnimalOperation);
}

class Monkey extends Animal {
  shout() {
    console.warn('Ooh oo aa aa!');
  }

  accept(operation: AnimalOperation) {
    operation.visitMonkey(this);
  }
}

class Speak extends AnimalOperation {
  visitMonkey(monkey: Monkey) {
    monkey.shout();
  }
}

(function() {
  const monkey = new Monkey();
  const speak = new Speak();

  monkey.accept(speak);
})();
