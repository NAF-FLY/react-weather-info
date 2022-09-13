import React from 'react';
import { Sun } from '../../../../assets/icons/global/Sun';

import s from './ThisDay.module.scss';

export const ThisDay = ({weather}) => {
    const time = weather.dt;
    const date = new Date(+time * 1000);
    const res = [date.getHours(), date.getMinutes()].map(function (x) {
        return x < 10 ? "0" + x : x
      }).join(":")

    return  (
        <div className={s.this__day}>
            <div className={s.top__block}>
                <div className={s.top__block_wrapper}>
                    <div className={s.this__temp}>{Math.round(weather.main.temp)}°</div>
                    <div className={s.this__day_name}>Сегодня</div>
                </div>
                <Sun />
            </div>
            <div className={s.bottom__block}>
                <div className={s.this__time}>
                    Время: <span>{res}</span>
                </div>
                <div className={s.this__city}>
                    Город: <span>{weather.name}</span>
                </div>
            </div>
        </div>
    );
};