import { TheElement } from "./element";

abstract class Widget {
  Widget() {}
  createElement() {
    return new TheElement(this);
  }
}

class Tag extends Widget {
  private name: string;
  public getName() {
    return this.name;
  }
  public attributes?: Widget[];
  constructor(name: string, options?: { attributes: Widget[] }) {
    super();
    this.name = name;
    this.attributes = options?.attributes;
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
}

class RawText extends Widget {
  private text: string;
  public getText() {
    return this.text;
  }
  constructor(text: string) {
    super();
    this.text = text;
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
}

abstract class StatelessWidget extends Widget {
  abstract build(): Widget;
}

export {
  Attribute,
  MultiChildTag,
  Multiline,
  RawText,
  SingleChildTag,
  StatelessWidget,
  Tag,
  Widget,
};
