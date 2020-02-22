class EditorMemento {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  getContent(): string {
    return this.content;
  }
}

class Editor {
  private content: string;

  constructor(content: string) {
    this.content = content;
  }

  getContent(): string {
    return this.content;
  }

  save() {
    const { content } = this;
    return new EditorMemento(content);
  }

  type(word: string) {
    this.content = this.content.concat(word);
  }

  restore(memento: EditorMemento) {
    this.content = memento.getContent();
  }
}

(function() {
  const editor = new Editor('this is example !!!');
  const memento = editor.save();

  console.warn('the content is ', memento, ' !');
})();
