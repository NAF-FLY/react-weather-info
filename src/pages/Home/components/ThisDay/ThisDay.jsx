import React from 'react';
import { Sun } from '../../../../assets/icons/global/Sun';

import s from './ThisDay.module.scss';

export const ThisDay = () => {
    

    return  (
        <div className={s.this__day}>
            <div className={s.top__block}>
                <div className={s.top__block_wrapper}>
                    <div className={s.this__temp}>20°</div>
                    <div className={s.this__day_name}>Сегодня</div>
                </div>
                <Sun />
            </div>
            <div className={s.bottom__block}>
                <div className={s.this__time}>
                    Время: <span>21:54</span>
                </div>
                <div className={s.this__city}>
                    Город: <span>Москва</span>
                </div>
            </div>
        </div>
    );
};