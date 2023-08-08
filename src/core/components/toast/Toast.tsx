import { ReactNode } from "react";

import { clsx } from "@/utils";

import styles from "./Toast.module.scss";

type ToastProps = {
	children?: ReactNode;
	ariaLabel?: string;
	className?: string;
	role?: string;
	ariaChecked?: boolean;
	duration?: "long" | "short";
	onToastShowEnd: () => void;
};

function Toast({
	children,
	ariaLabel = "Game Alert",
	className,
	role = "alert",
	duration = "short",
	onToastShowEnd,
}: ToastProps) {

	return (
		<div
			className={clsx(styles["toast"], styles[duration], className)}
			role={role}
			aria-label={ariaLabel}
			onAnimationEnd={onToastShowEnd}
		>
			{children}
		</div>
	);
}

export default Toast;
