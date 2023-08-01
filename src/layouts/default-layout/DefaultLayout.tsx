import { ReactNode } from "react";

import { Header } from "@/features";
import styles from './DefaultLayout.module.scss';
import { GameTitle, Icon } from "@/core/components";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function DefaultLayout({ children }: { children?: ReactNode }) {
    return (  
        <div className={styles["defaultLayout"]}>
            <Header 
                classNames={styles["defaultHeader"]}
                leftContent={<Icon icon={faBars} />}
                middleContent={<GameTitle />}
                rightContent={(
                    <div>
                        
                    </div>
                )}
            />
            <div className={styles["defaultContent"]}>
                {children}
            </div>
        </div>
    );
}

export default DefaultLayout;