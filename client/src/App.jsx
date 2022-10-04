import React from 'react';
import './App.css';
import CitiesTable from './components/CitiesTable';
import Weather from './components/Weather';

function App() {
	const [city, setCity] = React.useState();
	

	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<CitiesTable currentCity={city} setCurrentCity={setCity}/>
				</div>
				<div className="col pt-5">
					<Weather currentCity={city} />
				</div>
			</div>
		</div>
	);
}

export default App;
