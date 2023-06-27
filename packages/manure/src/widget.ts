import { TheElement } from "./element";

abstract class Widget {
  Widget() {}
  createElement() {
    return new TheElement(this);
  }
  getRuntimeType() {
    //@ts-ignore
    return this.constructor.name.toLowerCase();
  }
  getId() {
    return `${this.getRuntimeType()}-0`;
  }
}

class Tag extends Widget {
  private name: string;
  public getName() {
    return this.name;
  }
  public attributes?: Attribute[];
  constructor(name: string, options?: { attributes: Attribute[] }) {
    super();
    this.name = name;
    this.attributes = options?.attributes;
  }
  public attributesToString() {
    const attributes = this.attributes ?? [],
      attributeTexts = attributes.map((attribute) => attribute.toString()),
      attributeText = attributeTexts.join(" ");
    return attributeText;
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
      attributes?: Attribute[];
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

class Attribute {
  private name: string;
  private value: string;
  constructor(name: string, value: string) {
    this.name = name;
    this.value = value;
  }
  public getName() {
    return this.name;
  }
  public getValue() {
    return this.value;
  }
  public toString() {
    return `${this.name}-${this.value}`;
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
  style(): string {
    return "";
  }
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
