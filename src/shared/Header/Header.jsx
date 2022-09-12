import { React, useEffect, useState } from 'react';
import Select from 'react-select';
import { ChangeTheme } from '../../assets/icons/global/ChangeTheme';
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector';

import s from './Header.module.scss';

export const Header = () => {
    const options = [
        { value: 'city-1', label: 'Москва' },
        { value: 'city-2', label: 'Красногорск' },
    ];
    
    const [theme, setTheme] = useState('light');

    const colourStyles = {
        control: (styles) => ({
            ...styles,
            backgroundColor: theme === 'dark' ? '#4f4f4f' : 'rgba(71, 147, 255, 0.2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),
        singleValue: (styles) => ({
            ...styles,
            color: theme === 'dark' ? '#fff' : '#000',
        }),
    };
    
    function changeTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    useEffect(() => {
        const root = document.querySelector(':root');

        const components = [
            'body-background',
            'components-background',
            'card-background',
            'card-shadow',
            'text-color',
        ];

        components.forEach(component => {
            root.style.setProperty(
                `--${component}-default`, 
                `var(--${component}-${theme})`
            );
        });
    }, [theme]);

    return  (
        <header className={s.header}>
            
        <div className={s.wrapper}>
                <div className={s.logo}><GlobalSvgSelector id="header-logo"/></div>
                <div className={s.title}>React weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme} onClick={changeTheme}>
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