import React from 'react';
import Select from 'react-select';
import { ChangeTheme } from '../../assets/icons/global/ChangeTheme';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';

import s from './Header.module.scss';

const options = [
    { value: 'city-1', label: 'Москва' },
    { value: 'city-2', label: 'Красногорск' },
];

const colourStyles = {
    control: styles => ({
        ...styles,
        backgroundColor: 'rgba(71, 147, 255, 0.2)',
        width: '194px', 
        heightP: '37px',
        border: 'none',
        borderRadius: '10px',
        zIndex: 100
    })
}

export const Header = () => {
    

    return  (
        <header className={s.header}>
            
            <div className={s.wrapper}>
                <div className={s.logo}><GlobalSvgSelector/></div>
                <div className={s.title}>React weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme}>
                    <ChangeTheme id='change-theme'/>
                </div>
                <Select 
                    defaultValue={options[0]}
                    styles={colourStyles} 
                    options={options} 
                />
            </div>
        </header>
    );
};