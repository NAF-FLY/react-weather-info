import React from "react";
import { ThisDay } from "./components/ThisDay/ThisDay";

import s from './Home.module.scss';

export const Home = (props) => {
    return <div className={s.home}>
        <ThisDay />
    </div>
}