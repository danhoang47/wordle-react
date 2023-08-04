import { ReactNode } from "react";

import styles from './Modal.module.scss';
import { clsx } from "@/utils";

type ModalHeaderProps = {
	children?: ReactNode;
	className?: string;
	textAlign?: 'center' | 'left' | 'right'
};

function ModalHeader({
	children = undefined,
	className = "",
	textAlign = 'center'
}: ModalHeaderProps) {
	return <h4 className={clsx(className, styles['modal-header'], styles[textAlign])}>{children}</h4>;
}

export default ModalHeader;
