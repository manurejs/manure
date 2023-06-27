import { MultiChildTag, StatelessWidget, Widget } from "../widget";

class Row extends StatelessWidget {
  private children: Widget[];
  constructor({ children }: { children: Widget[] }) {
    super();
    this.children = children;
  }
  style(): string {
    return "display: flex; flex-direction: row;";
  }
  build(): Widget {
    return new MultiChildTag("div", { children: this.children });
  }
}

export { Row };
