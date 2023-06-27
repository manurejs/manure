import {
  Attribute,
  MultiChildTag,
  SingleChildTag,
  StatelessWidget,
  Tag,
  Widget,
} from "../widget";
import { Text } from "./text";

class Button extends StatelessWidget {
  private child: Widget;
  private onClick?: VoidFunction;
  constructor({ child, onClick }: { child: Widget; onClick?: VoidFunction }) {
    super();
    this.child = child;
    this.onClick = onClick;
  }
  style(): string {
    return "padding: 5pt;";
  }
  handle(action: string): void {
    if (action === "click") {
      this.child = new Text("You clicked me!");
      this.onClick();
    }
  }
  build(): Widget {
    return new MultiChildTag("form", {
      attributes: [
        new Attribute("method", "POST"),
        new Attribute("action", "/"),
      ],
      children: [
        new Tag("input", {
          attributes: [
            new Attribute("type", "hidden"),
            new Attribute("name", "id"),
            new Attribute("value", this.getId()),
          ],
        }),
        new Tag("input", {
          attributes: [
            new Attribute("type", "hidden"),
            new Attribute("name", "action"),
            new Attribute("value", "click"),
          ],
        }),
        new SingleChildTag("button", { child: this.child }),
      ],
    });
  }
}

export { Button };
