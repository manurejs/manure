import { Column, StatelessWidget, Text, Widget } from 'manure';

class MainScreen extends StatelessWidget {
	build(): Widget {
		return new Column({
			children: [
				new Text('Hello World!'),
				new Text('Welcome to ManureJS'),
				new Text("I'm chientrm"),
			],
		});
	}
}

export { MainScreen };
