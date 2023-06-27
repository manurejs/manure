import {
  Attribute,
  MultiChildTag,
  Multiline,
  SingleChildTag,
  StatelessWidget,
  Tag,
  Text,
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
        new Text("<!DOCTYPE html>"),
        new MultiChildTag("html", {
          attributes: [new Attribute("lang", { widget: new Text("en") })],
          children: [
            new MultiChildTag("head", {
              children: [
                new Tag("meta", {
                  attributes: [
                    new Attribute("charset", { widget: new Text("UTF-8") }),
                  ],
                }),
                new Tag("meta", {
                  attributes: [
                    new Attribute("name", { widget: new Text("viewport") }),
                    new Attribute("content", {
                      widget: new Text("width=device-width, initial-scale=1.0"),
                    }),
                  ],
                }),
                new SingleChildTag("title", {
                  child: new Text("Manure Counter"),
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
