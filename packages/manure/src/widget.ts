import { TheElement } from "./element";

abstract class Widget {
  createElement() {
    return new TheElement();
  }
  abstract build(): Widget;
}

export { Widget };
