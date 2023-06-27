import { StatelessWidget } from "./widget";

const render = (widget: StatelessWidget): string => {
    const builtWidget = widget.build(),
      element = builtWidget.createElement(),
      result = element.render();
    return result;
  },
  post = (widget: StatelessWidget, json: any) => {};

export { render, post };
