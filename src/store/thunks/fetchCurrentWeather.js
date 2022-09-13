import { WeatherService } from "../../services/WeatherService"
import { currentWeatherSlice } from "../slices/currentWeatherSlice";

export const fetchCurrentWeather = 
    (payload) => async (dispatch) => {
        try {
            dispatch(currentWeatherSlice.actions.fetchCurrentWeather());
            const res = await WeatherService.getCurrentWeather(payload);
            console.log(res);
            if (res.status != null) return console.log("It's okey")
            if (res.status === 200) {
                dispatch(currentWeatherSlice.actions.fetchCurrentWeatherSuccess(res));
            } else {
                dispatch(currentWeatherSlice.actions.fetchCurrentWeatherError(res));
            }
        } catch (error) {
            console.log(error);
        }
};