import { ReactNode, memo } from "react";

import styles from "./Keyboard.module.scss";
import { clsx } from "@/utils";

type RowProps = {
	children?: ReactNode;
	letters?: string[];
	ariaLabel?: string;
	role?: string;
};

// eslint-disable-next-line react-refresh/only-export-components
function Row({ children, ariaLabel = "Row", role = "group" }: RowProps) {
	return (
		<div role={role} className={clsx(styles["row"])} aria-label={ariaLabel}>
			{children}
		</div>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Row);
