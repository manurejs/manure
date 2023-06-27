import {
  Attribute,
  MultiChildTag,
  Multiline,
  RawText,
  SingleChildTag,
  StatelessWidget,
  Tag,
  Widget,
} from "./widget";

class TheElement {
  protected widget: Widget;
  constructor(widget: Widget) {
    this.widget = widget;
  }
  render(id?: string): { styles: string; html: string } {
    const widget = this.widget;
    if (widget instanceof RawText) {
      const html = widget.getText();
      return { html, styles: "" };
    } else if (widget instanceof Multiline) {
      const children = widget.getChildren(),
        childElements = children.map((child) => child.createElement()),
        childTexts = childElements.map((childElement) => childElement.render()),
        html = childTexts.map((childText) => childText.html).join("\n"),
        styles = childTexts.map((childText) => childText.styles).join("\n");
      return { html, styles };
    } else if (widget instanceof SingleChildTag) {
      const name = widget.getName(),
        attributeText = widget.attributesToString(),
        child = widget.getChild(),
        childElement = child.createElement(),
        { styles, html: childHtml } = childElement.render(),
        html =
          id !== undefined
            ? `<${name} id="${id}" ${attributeText}>${childHtml}</${name}>`
            : `<${name} ${attributeText}>${childHtml}</${name}>`;
      return { html, styles };
    } else if (widget instanceof MultiChildTag) {
      const name = widget.getName(),
        attributeText = widget.attributesToString(),
        children = widget.getChildren(),
        childElements = children.map((child) => child.createElement()),
        childTexts = childElements.map((childElement) => childElement.render()),
        childHtml = childTexts.map((childText) => childText.html).join("\n"),
        styles = childTexts.map((childText) => childText.styles).join("\n"),
        html =
          id !== undefined
            ? `<${name} id="${id}" ${attributeText}>${childHtml}</${name}>`
            : `<${name} ${attributeText}>${childHtml}</${name}>`;
      return { html, styles };
    } else if (widget instanceof Attribute) {
      const name = widget.getName(),
        value = widget.getValue(),
        html = `${name}="${value}"`;
      return { html, styles: "" };
    } else if (widget instanceof Tag) {
      const name = widget.getName(),
        attributeText = widget.attributesToString(),
        html =
          id !== undefined
            ? `<${name} id="${id}" ${attributeText}>`
            : `<${name} ${attributeText}>`;
      return { html, styles: "" };
    } else if (widget instanceof StatelessWidget) {
      const builtWidget = widget.build(),
        css = widget.style(),
        element = builtWidget.createElement(),
        id = widget.getId(),
        style = `#${id} { ${css} }`,
        rendered = element.render(id),
        html = rendered.html,
        styles = [rendered.styles, style.trim()].join("\n");
      return { html, styles };
    }
    // @ts-ignore
    throw new Error(`Invalid Widget ${widget.getRuntimeType()}`);
  }
}

export { TheElement };
