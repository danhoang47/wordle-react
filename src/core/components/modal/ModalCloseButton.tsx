import { ComponentProps } from "react";

import { Button } from "@/core/components";

import styles from "./Modal.module.scss";
import { clsx } from "@/utils";

type ModalCloseButtonProps = ComponentProps<typeof Button> & {
	xDirection?: "left" | "right";
	yDirection?: "top" | "bottom";
};

function ModalCloseButton({
	className = "",
	xDirection = "right",
	yDirection = "top",
	...props
}: ModalCloseButtonProps) {
	return (
		<Button
			{...props}
			className={clsx(
				styles["modal-close-button"],
				styles[xDirection],
				styles[yDirection],
				className
			)}
		/>
	);
}

export default ModalCloseButton;
