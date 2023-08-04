import { Button } from "@/core/components";

import styles from "./Switch.module.scss";
import { clsx } from "@/utils";

type SwitchProps = {
	state?: boolean;
	ariaLabel?: string;
	onSwitch: () => void;
	className?: string;
};

function Switch({
	onSwitch,
	state = false,
	ariaLabel = "switch",
	className = "",
}: SwitchProps) {
	return (
		<Button
			ariaLabel={ariaLabel}
			role="switch"
			ariaChecked={state}
			className={clsx(styles["switch"], className)}
			onClick={() => {
				onSwitch();
			}}
		>
			<span className={styles["switch-knob"]} />
		</Button>
	);
}

export default Switch;
