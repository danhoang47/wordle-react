import { ReactNode } from "react";

import ModalCloseButton from "./ModalCloseButton";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";

import { useClickOutside } from "@/core/hooks";

import styles from "./Modal.module.scss";
import { clsx } from "@/utils";

type ModalProps = {
	children?: ReactNode;
	label?: string;
	onClickOutside: () => void;
	className?: string
};

function Modal({ children, label = "modal", onClickOutside, className }: ModalProps) {
	const modalRef = useClickOutside<HTMLDivElement>(onClickOutside);

	return (
		<div className={clsx(styles["modal-overlay"], className)}>
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
Modal.Header = ModalHeader;
Modal.Body = ModalBody
Modal.Footer = ModalFooter;

export default Modal;
