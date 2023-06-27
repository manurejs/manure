import { TheElement } from "../element";
import { Widget } from "../widget";

class TagElement extends TheElement {
  render(): string {
    const widget = this.widget as Tag,
      name = widget.getName(),
      child = widget.getChild(),
      childElement = child.createElement(),
      childText = childElement.render();
    return `<${name}>${childText}</${name}>`;
  }
}

class Tag extends Widget {
  private name: string;
  public getName() {
    return this.name;
  }
  private child: Widget;
  public getChild() {
    return this.child;
  }
  constructor({ name, child }: { name: string; child: Widget }) {
    super();
    this.name = name;
    this.child = child;
  }
  createElement(): TheElement {
    return new TagElement(this);
  }
  build(): Widget {
    throw new Error("Method not implemented.");
  }
}

export { Tag };
