
import s from './Days.module.scss';

export const Tabs = () => {
    const tabs = [
        {
          value: 'На неделю',
        },
      ];
    return  (
        <div className={s.tabs}>
            <div className={s.tabs__wrapper}>
                {tabs.map(tab => (
                    <div className={s.tab} key={tab.value}>
                        {tab.value}
                    </div>
                ))}
            </div>
            <div className={s.cancel}>Отменить</div>
        </div>
    );
};