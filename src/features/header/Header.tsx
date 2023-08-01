import { ReactNode } from "react";

import { clsx } from "@/utils";
import styles from "./Header.module.scss";

type HeaderProps = {
	leftContent?: ReactNode;
	middleContent?: ReactNode;
	rightContent?: ReactNode;
	classNames?: string;
};

function Header({
	classNames = "",
	leftContent,
	middleContent,
	rightContent,
}: HeaderProps) {
	return (
		<header id={styles["header"]} className={clsx(classNames)}>
			<div className={styles["leftContent"]}>{leftContent}</div>
			<div className={styles["middleContent"]}>{middleContent}</div>
			<div className={styles["rightContent"]}>{rightContent}</div>
		</header>
	);
}

export default Header;
