interface Subjects {
  [key: string]: any;
}

class Observer {
  subject: string;

  constructor(subject: string) {
    this.subject = subject;
  }

  notify() {
    console.log(`This ${this.subject} was fired !`);
    // 貌似
    this.subject = 'Done';
  }
}

class Subject {
  subjects: Subjects = {};

  add(subject, observer: Observer): void {
    if (!this.subjects[subject]) {
      this.subjects[subject] = [];
    }

    this.subjects[subject].push(observer);
  }

  remove(subject, observer: Observer): void {
    this.subjects[subject].forEach((item, index) => {
      if (item !== observer) {
        this.subjects[subject].splice(index, 1);
      }
    });
  }

  fire(subject): void {
    this.subjects[subject].forEach(item => item.notify());
  }
}

export { Observer, Subject };
