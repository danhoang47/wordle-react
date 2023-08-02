import { ReactNode } from "react";

import { Header, NavigationMenu, HelpItem, StatisticsItem, SettingItem } from "@/features";
import { GameTitle } from "@/core/components";

import styles from './DefaultLayout.module.scss';

function DefaultLayout({ children }: { children?: ReactNode }) {
    return (  
        <div className={styles["defaultLayout"]}>
            <Header 
                classNames={styles["defaultHeader"]}
                leftContent={<NavigationMenu />}
                middleContent={<GameTitle />}
                rightContent={(
                    <>
                        <HelpItem />
                        <StatisticsItem />
                        <SettingItem />
                    </>
                )}
            />
            <div className={styles["defaultContent"]}>
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;