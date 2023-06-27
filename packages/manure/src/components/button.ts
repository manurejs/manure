import { SingleChildTag, StatelessWidget, Widget } from "../widget";

class Button extends StatelessWidget {
  private child: Widget;
  constructor({ child }: { child: Widget }) {
    super();
    this.child = child;
  }
  style(): string {
    return `
      padding: 5pt;
      text-align: center;
    `;
  }
  build(): Widget {
    return new SingleChildTag("button", { child: this.child });
  }
}

export { Button };
