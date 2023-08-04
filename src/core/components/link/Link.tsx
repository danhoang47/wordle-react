import { ReactNode } from "react";

import { clsx } from "@/utils";

import styles from "./Link.module.scss";

type LinkProps = {
	ariaLabel?: string;
	title?: string;
	className?: string;
	href: string;
	children?: ReactNode;
};

function Link({
	href,
	ariaLabel = "link",
	className = "",
	title = "link",
	children,
}: LinkProps) {
	return (
		<a
			aria-label={ariaLabel}
			title={title}
			href={href}
			className={clsx(className, styles["link"])}
		>
			{children}
		</a>
	);
}

export default Link;
