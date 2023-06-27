import { RawText, SingleChildTag, StatelessWidget, Widget } from "../widget";

class Text extends StatelessWidget {
  private text: string;
  public getText() {
    return this.text;
  }
  constructor(text: string) {
    super();
    this.text = text;
  }
  build(): Widget {
    return new SingleChildTag("p", { child: new RawText(this.text) });
  }
}

export { Text };
