import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import { clsx } from "@/utils";

import styles from "./Icon.module.scss";

type IconProps = {
	icon: IconProp;
	className?: string;
	size?: "sm" | "md" | "lg" | "xl";
};

function Icon({ icon, className = "", size = "lg" }: IconProps) {
	return (
		<FontAwesomeIcon
			icon={icon}
			className={clsx(className, styles[size], styles["icon"])}
		/>
	);
}

export default Icon;
