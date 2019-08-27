interface Subjects {
  [key: string]: any;
}

class EventBus {
  subjects: Subjects = [];

  on(subject, callback): void {
    if (!this.subjects[subject]) {
      this.subjects[subject] = [];
    }

    this.subjects[subject].push(callback);
  }

  off(subject, callback = null): void {
    if (callback) {
      this.subjects[subject] = [];
      return;
    }

    this.subjects[subject].forEach((item, index) => {
      if (item === callback) {
        this.subjects[subject].splice(index, 1);
      }
    });
  }

  emit(subject, data = null): void {
    this.subjects[subject].forEach(item => item(data));
  }
}

export { EventBus };
