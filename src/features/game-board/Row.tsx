import { ReactNode, memo } from "react";

import styles from "./Game.module.scss";
import { clsx } from "@/utils";

type RowProps = {
	children?: ReactNode;
	letters?: string[];
	ariaLabel?: string;
	role?: string;
	isValid: boolean;
	onSubmitInvalidKeyword: () => void;
};

// eslint-disable-next-line react-refresh/only-export-components
function Row({
	children,
	ariaLabel = "Row",
	role = "group",
	onSubmitInvalidKeyword,
	isValid,
}: RowProps) {
	return (
		<div
			role={role}
			className={clsx(
				styles["row"],
				!isValid && styles["shake-horizontal"]
			)}
			aria-label={ariaLabel}
			onAnimationEnd={onSubmitInvalidKeyword}
		>
			{children}
		</div>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(Row);
