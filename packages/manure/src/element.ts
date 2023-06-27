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
  protected id?: string;
  constructor(widget: Widget, id?: string) {
    this.widget = widget;
    this.id = id;
  }
  render(id?: string): { styles: string[]; html: string } {
    const widget = this.widget;
    if (widget instanceof RawText) {
      const html = widget.getText();
      return { html, styles: [] };
    } else if (widget instanceof Multiline) {
      const children = widget.getChildren(),
        childElements = children.map((child) => child.createElement()),
        childTexts = childElements.map((childElement) => childElement.render()),
        html = childTexts.map((childText) => childText.html).join("\n"),
        styles = childTexts.reduce(
          (a, b) => [...a, ...b.styles],
          [] as string[]
        );
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
      return { html, styles: styles };
    } else if (widget instanceof MultiChildTag) {
      const name = widget.getName(),
        attributeText = widget.attributesToString(),
        children = widget.getChildren(),
        childElements = children.map((child) => child.createElement()),
        childTexts = childElements.map((childElement) => childElement.render()),
        childHtml = childTexts.map((childText) => childText.html).join("\n"),
        styles = childTexts.reduce(
          (a, b) => [...a, ...b.styles],
          [] as string[]
        ),
        html =
          id !== undefined
            ? `<${name} id="${id}" ${attributeText}>${childHtml}</${name}>`
            : `<${name} ${attributeText}>${childHtml}</${name}>`;
      return { html, styles: styles };
    } else if (widget instanceof Attribute) {
      const name = widget.getName(),
        value = widget.getValue(),
        html = `${name}="${value}"`;
      return { html, styles: [] };
    } else if (widget instanceof Tag) {
      const name = widget.getName(),
        attributeText = widget.attributesToString(),
        html =
          id !== undefined
            ? `<${name} id="${id}" ${attributeText}>`
            : `<${name} ${attributeText}>`;
      return { html, styles: [] };
    } else if (widget instanceof StatelessWidget) {
      const builtWidget = widget.build(),
        css = widget.style(),
        element = builtWidget.createElement();
      if (css) {
        const id = widget.getId(),
          style = `#${id} { ${css} }`,
          { html, styles } = element.render(id);
        return { html, styles: [...styles, style] };
      } else {
        return element.render();
      }
    }
    // @ts-ignore
    throw new Error(`Invalid Widget ${widget.getRuntimeType()}`);
  }
}

export { TheElement };
