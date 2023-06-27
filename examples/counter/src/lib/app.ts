import { App, StatelessWidget, Widget } from 'manure';
import { MainScreen } from './screens/main/screen';

class CounterApp extends StatelessWidget {
	build(): Widget {
		return new App({
			home: new MainScreen(),
		});
	}
}

export { CounterApp };
