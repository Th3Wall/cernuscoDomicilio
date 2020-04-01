import { Component, Fragment } from 'preact';

import { ListCategory } from '../components/listCategory';

export default class Home extends Component {
	state = {
		filter: '',
		categoryFilter: null
	};

	handleChangeFilter = e => {
		const text = e.target.value;
		this.setState({ filter: text });
	};

	handleCategoryFilter = key => _ => {
		if (key === this.state.categoryFilter) {
			return this.setState({ categoryFilter: null });
		}
		this.setState({ categoryFilter: key });
	};

	filteredCategories(filter, categoryFilter) {
		const { results } = this.props;
		const regex = new RegExp(`${filter}`, 'i');

		return Object.keys(results)
			.filter(key => (categoryFilter ? categoryFilter === key : true))
			.reduce((acc, key) => {
				return (
					{
						...acc,
						[key]: {
							icon: results[key].icon,
							data: results[key].data.filter(e => (filter.length ? regex.test(e.name) : true))
						}
				}
			);
		}, {});
	}

	render(props, { filter, categoryFilter }) {
		const { results: stores } = props;
		const filteredStores = this.filteredCategories(filter, categoryFilter)

		return (
			<Fragment>
				<div class="relative p-5 lg:max-w-5xl xl:max-w-6xl lg:m-auto py-4 md:py-10">
					<input
						class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
						type="text"
						placeholder="Cerca Attività"
						onInput={this.handleChangeFilter}
					/>
				</div>
				<div class="relative flex md:inline-block overflow-x-scroll md:overflow-x-hidden md:overflow-hidden text-center mt-2 pb-10">
					{Object.keys(stores).map(key => (
						<button
							onClick={this.handleCategoryFilter(key)}
							class={`m-1 flex-grow-0 flex-shrink-0 md:inline-block items-center border border-blue-500 py-2 px-4 rounded-full ${
								key === categoryFilter
									? "bg-blue-500 hover:bg-blue-500 text-white outline-none focus:outline-none active:outline-none text-white"
									: "bg-white hover:bg-blue-500 hover:text-white"
							}`}
						>
							<span>{`${stores[key].icon} ${key}`}</span>
						</button>
					))}
				</div>
				<div class="relative mb-10 font-sans text-md text-gray-800">
					{
						Object.keys(filteredStores)
							.filter(key => filteredStores[key].data.length)
							.map(key => (
								<ListCategory
									name={key}
									category={filteredStores[key]}
									filter={filter}
								/>
							))
					}
				</div>
				<div class="flex flex-col items-center mt-10 mb-8">
					<p class="mb-6 text-center block">Developed with ❤️ by <a class="text-orange-500" href={process.env.PREACT_APP_DEV_LINK}>{process.env.PREACT_APP_DEV_NAME}</a></p>
					<a href="https://www.iubenda.com/privacy-policy/66156653" class="iubenda-black iubenda-embed" title="Privacy Policy ">Privacy Policy</a>
				</div>
			</Fragment>
		);
	}
}
