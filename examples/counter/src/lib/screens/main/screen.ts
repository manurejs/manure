import { Column, StatelessWidget, Text, Widget } from 'manure';

class MainScreen extends StatelessWidget {
	build(): Widget {
		return new Column({
			children: [new Text('Hello World!'), new Text('GG')],
		});
	}
}

export { MainScreen };
