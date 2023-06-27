import { TheElement } from "./element";

abstract class Widget {
  Widget() {}
  createElement() {
    return new TheElement(this);
  }
  abstract build(): Widget;
}

class Tag extends Widget {
  private name: string;
  public getName() {
    return this.name;
  }
  public attributes?: Widget[];
  constructor(name: string, { attributes }: { attributes: Widget[] }) {
    super();
    this.name = name;
    this.attributes = attributes;
  }
  build(): Widget {
    throw new Error("Method not implemented.");
  }
}

class SingleChildTag extends Tag {
  private child: Widget;
  public getChild() {
    return this.child;
  }
  constructor(
    name: string,
    {
      attributes,
      child,
    }: {
      attributes?: Attribute[];
      child: Widget;
    }
  ) {
    super(name, { attributes });
    this.child = child;
  }
  build(): Widget {
    throw new Error("Method not implemented.");
  }
}

class MultiChildTag extends Tag {
  private children: Widget[];
  public getChildren() {
    return this.children;
  }
  constructor(
    name: string,
    {
      children,
      attributes,
    }: {
      attributes?: Widget[];
      children: Widget[];
    }
  ) {
    super(name, { attributes });
    this.children = children;
  }
  build(): Widget {
    throw new Error("Method not implemented.");
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
  build(): Widget {
    throw new Error("Method not implemented.");
  }
}

class Attribute extends Widget {
  private name: string;
  private widget: Widget;
  constructor(name: string, value: { widget: Widget }) {
    super();
    this.name = name;
    this.widget = value.widget;
  }
  public getName() {
    return this.name;
  }
  public getValue() {
    return this.widget;
  }
  build(): Widget {
    throw new Error("Method not implemented.");
  }
}

class Multiline extends Widget {
  private children: Widget[];
  public getChildren() {
    return this.children;
  }
  constructor({ children }: { children: Widget[] }) {
    super();
    this.children = children;
  }
  build(): Widget {
    throw new Error("Method not implemented.");
  }
}

export {
  Attribute,
  Multiline,
  MultiChildTag,
  SingleChildTag,
  Tag,
  Text,
  Widget,
};
