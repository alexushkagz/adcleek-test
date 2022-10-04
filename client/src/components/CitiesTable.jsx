import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CitiesTable = ({currentCity, setCurrentCity}) => {
    const [cities, setCities] = useState([]);

    const fetchCities = async () => {
        const response = await axios.get('/cities');
        setCities(response.data);
    }
    useEffect(() => {
        fetchCities();
    }, [])

    return (
        <div className="table-responsive">
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Code Insee</th>
                        <th>City</th>
                        <th>Population</th>
                    </tr>
                </thead>
                <tbody>
                    {cities.map(city => 
                        <tr 
                            className={city.insee == currentCity ? 'table-success' : null}
                            key={city.id}
                            onClick={e => setCurrentCity(city.insee)}
                        >
                            <td>{city.insee}</td>
                            <td>{city.name}</td>
                            <td>{city.population}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default CitiesTable