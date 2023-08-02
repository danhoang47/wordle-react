import { ReactNode } from "react";

type ButtonProps = {
	children?: ReactNode;
	label?: string;
	onClick: () => void;
	className?: string;
};

function Button({ className = "", children, label = "button", onClick }: ButtonProps) {
	return (
		<button
			role="button"
			type="button"
			aria-label={label}
			onClick={(event) => {
				event.stopPropagation();
				onClick();
			}}
			className={className}
		>
			{children}
		</button>
	);
}

export default Button;
