import { TheElement } from "../element";
import { Widget } from "../widget";

class TextElement extends TheElement {
  render(): string {
    const widget = this.widget as Text,
      text = widget.getText();
    return text;
  }
}

class Text extends Widget {
  private text: string;
  public getText() {
    return this.text;
  }
  constructor(text: string) {
    super();
    this.text = text;
  }
  createElement(): TheElement {
    return new TextElement(this);
  }
  build(): Widget {
    throw new Error("Method not implemented.");
  }
}
