import { ReactNode } from "react";

type ButtonProps = {
	children?: ReactNode;
	label?: string;
	onClick: () => void;
};

function Button({ children, label = "button", onClick }: ButtonProps) {
	return (
		<button
			role="button"
			type="button"
			aria-label={label}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default Button;
