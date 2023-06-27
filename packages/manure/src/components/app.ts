import {
  Attribute,
  MultiChildTag,
  Multiline,
  RawText,
  SingleChildTag,
  StatelessWidget,
  Tag,
  Widget,
} from "../widget";

class App extends StatelessWidget {
  private home: Widget;
  constructor({ home }: { home: Widget }) {
    super();
    this.home = home;
  }
  build(): Widget {
    return new Multiline({
      children: [
        new RawText("<!DOCTYPE html>"),
        new MultiChildTag("html", {
          attributes: [new Attribute("lang", { widget: new RawText("en") })],
          children: [
            new MultiChildTag("head", {
              children: [
                new Tag("meta", {
                  attributes: [
                    new Attribute("charset", { widget: new RawText("UTF-8") }),
                  ],
                }),
                new Tag("meta", {
                  attributes: [
                    new Attribute("name", { widget: new RawText("viewport") }),
                    new Attribute("content", {
                      widget: new RawText(
                        "width=device-width, initial-scale=1.0"
                      ),
                    }),
                  ],
                }),
                new SingleChildTag("title", {
                  child: new RawText("Manure Counter"),
                }),
              ],
            }),
            new SingleChildTag("body", { child: this.home }),
          ],
        }),
      ],
    });
  }
}

export { App };
