import {
  Attribute,
  MultiChildTag,
  Multiline,
  SingleChildTag,
  StatelessWidget,
  Tag,
  Text,
  Widget,
} from "./widget";

class TheElement {
  protected widget: Widget;
  constructor(widget: Widget) {
    this.widget = widget;
  }
  render(): string {
    const widget = this.widget;
    if (widget instanceof Text) {
      const text = widget.getText();
      return text;
    } else if (widget instanceof Multiline) {
      const children = widget.getChildren(),
        childElements = children.map((child) => child.createElement()),
        childTexts = childElements.map((childElement) => childElement.render()),
        text = childTexts.join("");
      return text;
    } else if (widget instanceof SingleChildTag) {
      const name = widget.getName(),
        attributes = widget.attributes ?? [],
        attributeElements = attributes.map((attribute) =>
          attribute.createElement()
        ),
        attributeTexts = attributeElements.map((element) => element.render()),
        attributeText = attributeTexts.join(" "),
        child = widget.getChild(),
        childElement = child.createElement(),
        childText = childElement.render(),
        result = `<${name} ${attributeText}>${childText}</${name}>`;
      return result;
    } else if (widget instanceof MultiChildTag) {
      const name = widget.getName(),
        attributes = widget.attributes ?? [],
        attributeElements = attributes.map((attribute) =>
          attribute.createElement()
        ),
        attributeTexts = attributeElements.map((element) => element.render()),
        attributeText = attributeTexts.join(" "),
        children = widget.getChildren(),
        childElements = children.map((child) => child.createElement()),
        childTexts = childElements.map((childElement) => childElement.render()),
        childText = childTexts.join("\n"),
        result = `<${name} ${attributeText}>${childText}</${name}>`;
      return result;
    } else if (widget instanceof Attribute) {
      const name = widget.getName(),
        value = widget.getValue(),
        valueElement = value.createElement(),
        valueText = valueElement.render();
      return `${name}="${valueText}"`;
    } else if (widget instanceof Tag) {
      const name = widget.getName(),
        attributes = widget.attributes ?? [],
        attributeElements = attributes.map((attribute) =>
          attribute.createElement()
        ),
        attributeTexts = attributeElements.map((element) => element.render()),
        attributeText = attributeTexts.join(" "),
        result = `<${name} ${attributeText}>`;
      return result;
    } else if (widget instanceof StatelessWidget) {
      const builtWidget = widget.build(),
        element = builtWidget.createElement(),
        result = element.render();
      return result;
    }
    // @ts-ignore
    throw new Error(`Invalid Widget ${widget.constructor.name}`);
  }
}

export { TheElement };
