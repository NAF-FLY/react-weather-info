import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';
import { ThisDayItem } from './ThisDayItem';



export const ThisDayInfo = ({weather}) => {

    const items = [
      {
        icon_id: 'temp',
        name: 'Температура',
        value: `${Math.round(weather.main.temp)}° - ощущается как ${Math.round(weather.main.feels_like)}°`,
      },
      {
        icon_id: 'pressure',
        name: 'Давление',
        value: `${Math.round(weather.main.pressure*0.75)} мм ртутного столба - нормальное`,
      },
      {
        icon_id: 'precipitation',
        name: 'Осадки',
        // value: `${desc.weather[0].description}`,
      },
      {
        icon_id: 'wind',
        name: 'Ветер',
        value: `${weather.wind.speed} м/с юго-запад - легкий ветер`,
      },
    ];



    return (
      <div className={s.this__day_info}>
        <div className={s.this__day_info_items}>
          {items.map((item) => (
            <ThisDayItem key={item.icon_id} item={item} />
          ))}
        </div>
        <img className={s.cloud__img} src={cloud} alt="облако" />
      </div>
    );
  };