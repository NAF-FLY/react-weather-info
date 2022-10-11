import React, { useState } from "react";
import { useEffect } from "react";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import getFormattedWeatherData from "../../services/forecastServices";
import { selectCurrentWeatherData } from "../../store/selectors";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";
import { Days } from "./components/Days/Days";
import { ThisDay } from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";

import s from "./Home.module.scss";

export const Home = (props) => {
  const [query, setQuery] = useState({ q: "Москва" });
  const [forecast, setForecast] = useState(null);

  const dispatch = useCustomDispatch();

  const { weather } = useCustomSelector(selectCurrentWeatherData);

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query }).then((data) => {
        setForecast(data);
      });
    };
    fetchWeather();
  }, [query]);

  useEffect(() => {
    dispatch(fetchCurrentWeather("Москва"));
  }, []);

  return (
    weather.name !== undefined &&
    forecast !== null && (
      <div className={s.home}>
        <div className={s.wrapper}>
          <ThisDay weather={weather} />
          <ThisDayInfo weatherItem={weather} />
        </div>
        <Days items={forecast.daily} />
      </div>
    )
  );
};
