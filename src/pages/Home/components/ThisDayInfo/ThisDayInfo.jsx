import { Component } from 'react';

import s from './ThisDayInfo.module.scss';
import cloud from '../../../../assets/images/cloud.png';
import { ThisDayItem } from './ThisDayItem';



class ThisDayInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {icon_id: 'temp', name: 'Температура', value: '20 - ощущается как 17'},
                {icon_id: 'pressure', name: 'Давление', value: '765 мм ртутного столба - нормальное'},
                {icon_id: 'precipitation', name: 'Осадки', value: 'Без осадков'},
                {icon_id: 'wind', name: 'Ветер', value: '3 м/с юго-запад - легкий ветер'},
            ]
        }
    }

    render () {
        const {items} = this.state;
        return  (
            <div className={s.this__day_info}>
                <div className={s.this__day_info_items}>
                    {items.map((item, index) => (
                    <ThisDayItem key={String(index)} item={item} />
                    ))}
                </div>
                <img className={s.cloud__img} src={cloud} alt="облако" />
            </div>
        );
    }  
};

export default ThisDayInfo;