import { h, Component, createContext } from 'preact';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';

// import 'tailwindcss/dist/tailwind.min.css';
import './assets/styles/global.css';

// Routes
import Home from './routes/home.js';
import Form from './routes/form.js';

// Components
import { Dialog } from './components/dialog.js';
import { PWAPrompt } from './components/pwaPrompt';

// Constants
const SEARCH = process.env.PREACT_APP_DATA_SOURCE;

export const Action = createContext({})

export default class App extends Component {

	state = {
		results: {},
		isHomepage: true,
		isPopupOpen: false,
		popupNumbers: [],
		popupContacts: []
	}
	
	handleRoute = e => {
		this.currentUrl = e.url;
		this.setState({ isHomepage: e.url.replace(/\?.*/g, "") === "/" });
	};

	setPopupNumbers = (e, numberArray) => {
		e.preventDefault();

		this.setState({
			popupNumbers: numberArray,
			isPopupOpen: true
		})
	}

	setPopupContacts = (e, contactsArray) => {
		e.preventDefault();

		this.setState({
			popupContacts: contactsArray,
			isPopupOpen: true
		})
	}

	closePopup = (e) => {	
		if (e.currentTarget === e.target) {
			this.setState({ isPopupOpen: false, popupNumbers: [], popupContacts: [] })
		}
	}

	componentDidMount() {
		fetch(`${process.env.PREACT_APP_DATA_SOURCE}`)
			.then(r => r.json())
			.then(json => {
				this.setState({
					results: json,
					resultBkp: json
				});
			});
	}

	componentDidUpdate() {
		const { isPopupOpen } = this.state;
		
		const root = document.documentElement;
		root.style.setProperty('--popup-visible', isPopupOpen ? 'hidden': 'initial')
	}

	render(props, { isHomepage, results, popupNumbers, popupContacts, isPopupOpen }) {
		return (
			<Action.Provider value={{setPopupNumbers: this.setPopupNumbers, setPopupContacts: this.setPopupContacts}}>
				<div id="app" class="px-5 max-w-screen-xl mx-auto">
					<nav class="flex justify-center md:justify-end items-center">
						{
							isHomepage
								? <Link class="m-5 bg-blue-500 inline-block hover:bg-blue-700 text-white font-bold px-2 py-1 rounded" href="/form">➕ Aggiungi la tua attività</Link>
								: <Link class="m-5 text-blue-500 hover:text-blue-800" href="/">Ritorna alla ricerca</Link>
						}
					</nav>
					<h1 class="font-sans text-4xl md:text-5xl lg:text-6xl pt-10 text-gray-800 text-center">
						<span class="block sm:inline-block" role="img" aria-label="biker">
							🚴&nbsp;
						</span>
						{`${process.env.PREACT_APP_CITY} a Domicilio`}
					</h1>
					<Router onChange={this.handleRoute}>
						<Home path="/" results={results} />
						<Form path="/form" />
					</Router>
				</div>
				<Dialog isOpen={isPopupOpen} closePopup={this.closePopup} emailContacts={popupContacts} telNumbers={popupNumbers} />
				<PWAPrompt />
			</Action.Provider>
		);
	}
}
