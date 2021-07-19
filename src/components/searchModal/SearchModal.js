import React, { useState, useEffect } from "react";
import { SUPPORTED_CITIES } from "constants/index";
import { fetchWeather } from "actions/index";

export const SearchModal = ({ closeModal, onCityClick }) => {
    const [searchCity, setSearchCity] = useState('');
    const [citiesTemp, setCitiesTemp] = useState([]);

    useEffect(() => {
        SUPPORTED_CITIES.forEach((city) => {
            fetchWeather(city).then(({ data }) => {
                setCitiesTemp((currentState) => [...currentState, { city, temp: data.main?.temp }]);
            });
        });
    }, []);

    const searchCityHandler = (e) => {
        console.log(e);
        setSearchCity(e.target.value)
    }

    const cityClickHandler = (city) => () => {
        onCityClick(city);
        closeModal();
    };

    return (
        <div className="searchScreen">
            <div className="title">
                <p>Location</p>
            </div>

            <div className="search_bar">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search city..."
                    onChange={searchCityHandler}
                />
                <i className="fas fa-map-marker-alt" />{" "}
            </div>

            <div className="cities">
                {citiesTemp.map(({ city, temp }, id) => {
                    return (
                        city.toLowerCase().includes(searchCity.toLowerCase()) && (
                            <div
                                className="city_list"
                                key={id}
                                onClick={cityClickHandler(city)}
                            >
                                <div className="city_name">{city}</div>
                                <div className="city_temp">{Math.round(temp)}°C </div>
                            </div>
                        )
                    );
                })}
            </div>
        </div>
    );
};

export default SearchModal;
