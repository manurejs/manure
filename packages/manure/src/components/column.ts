import { MultiChildTag, Multiline, StatelessWidget, Widget } from "../widget";

class Column extends StatelessWidget {
  private children: Widget[];
  constructor({ children }: { children: Widget[] }) {
    super();
    this.children = children;
  }
  style(): string {
    return "display: flex; flex-direction: column;";
  }
  build(): Widget {
    return new MultiChildTag("div", { children: this.children });
  }
}

export { Column };
