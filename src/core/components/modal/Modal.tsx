import { ReactNode } from "react";

import ModalCloseButton from "./ModalCloseButton";
import { useClickOutside } from "@/core/hooks";

import styles from "./Modal.module.scss";
type ModalProps = {
	children?: ReactNode;
	label?: string;
	onClickOutside: () => void;
};

function Modal({ children, label = "modal", onClickOutside }: ModalProps) {
	const modalRef = useClickOutside<HTMLDivElement>(onClickOutside);

	return (
		<div className={styles["modal-overlay"]}>
			<div
				aria-label={label}
				role="dialog"
				aria-modal="true"
				className={styles["modal"]}
				ref={modalRef}
			>
				{children}
			</div>
		</div>
	);
}

Modal.CloseButton = ModalCloseButton;

export default Modal;
