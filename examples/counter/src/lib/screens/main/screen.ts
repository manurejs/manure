import { Button, Column, Row, StatelessWidget, Text, Widget } from 'manure';

class MainScreen extends StatelessWidget {
  build(): Widget {
    return new Column({
      children: [
        new Text('Welcome to ManureJS'),
        new Text('This is counter example!'),
        new Row({
          children: [
            new Text('First element'),
            new Text('Second element'),
            new Column({
              children: [new Text('Third element'), new Text('Fourth element')],
            }),
          ],
        }),
        new Row({
          children: [
            new Button({
              child: new Text('Click me!'),
              onClick: () => {},
            }),
          ],
        }),
      ],
    });
  }
}

export { MainScreen };
