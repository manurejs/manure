import { StatelessWidget } from "./widget";

const render = (widget: StatelessWidget): string => {
  const tmp = widget.build(),
    element = tmp.createElement(),
    result = element.render();
  return result;
};

export { render };
