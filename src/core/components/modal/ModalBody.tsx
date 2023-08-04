import { ReactNode } from "react";

import styles from "./Modal.module.scss";
import { clsx } from "@/utils";

type ModalBodyProps = {
	children?: ReactNode;
	className?: string;
	display?: "flex" | "block";
};

function ModalBody({
	children = undefined,
	className = "",
	display = "flex",
}: ModalBodyProps) {
	return (
		<div className={clsx(className, styles[display], styles["modal-body"])}>
			{children}
		</div>
	);
}

export default ModalBody;
