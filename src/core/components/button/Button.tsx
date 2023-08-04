import { clsx } from "@/utils";
import { ReactNode, ButtonHTMLAttributes } from "react";

import styles from './Button.module.scss';

type ButtonProps = {
	children?: ReactNode;
	ariaLabel?: string;
	onClick: () => void;
	className?: string;
	role?: string;
	type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
	ariaChecked?: boolean
};

function Button({
	className,
	children,
	ariaLabel = "button",
	onClick,
	role = "button",
	type = "button",
	ariaChecked
}: ButtonProps) {
	return (
		<button
			role={role}
			type={type}
			aria-checked={ariaChecked}
			aria-label={ariaLabel}
			onClick={(event) => {
				event.stopPropagation();
				onClick();
			}}
			className={clsx(styles['button'], className)}
		>
			{children}
		</button>
	);
}

export default Button;
