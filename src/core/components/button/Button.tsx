import { ReactNode, ButtonHTMLAttributes, forwardRef } from "react";

import { clsx } from "@/utils";

import styles from "./Button.module.scss";

type ButtonProps = {
	children?: ReactNode;
	ariaLabel?: string;
	onClick: () => void;
	onFocus?: () => void;
	className?: string;
	role?: string;
	type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
	ariaChecked?: boolean;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			children,
			ariaLabel = "button",
			onClick,
			onFocus,
			role = "button",
			type = "button",
			ariaChecked,
		},
		ref
	) => {
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
				className={clsx(styles["button"], className)}
				onFocus={onFocus}
				ref={ref}
			>
				{children}
			</button>
		);
	}
);

export default Button;
