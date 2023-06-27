import { SingleChildTag, StatelessWidget, Widget } from "../widget";

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
  script(): string {
    if (this.onClick) {
      return `
document.getElementById("${this.getId()}").onclick = () => {
  alert("Yay!");
}
      `;
    }
    return "";
  }
  build(): Widget {
    return new SingleChildTag("button", { child: this.child });
  }
}

export { Button };
