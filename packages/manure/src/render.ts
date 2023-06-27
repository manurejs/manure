import { Widget } from "./widget";

const render = (widget: Widget): string => {
  const tmp = widget.build(),
    element = tmp.createElement(),
    result = element.render();
  return result;
};

export { render };
