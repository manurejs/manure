import { Button } from "./src/components/button";
import { Column } from "./src/components/column";
import { Row } from "./src/components/row";
import { Text } from "./src/components/text";
import { post, render } from "./src/framework";
import { StatelessWidget, Widget } from "./src/widget";

interface Post {
  id: string;
  action: string;
}

export {
  Button,
  Column,
  Post,
  Row,
  StatelessWidget,
  Text,
  Widget,
  post,
  render,
};
