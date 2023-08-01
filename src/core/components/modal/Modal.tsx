import { ReactNode } from "react";

type ModalProps = {
	children?: ReactNode;
	label?: string;
};

function Modal({ children, label = "modal" }: ModalProps) {
	return (
		<div 
            aria-label={label} 
            role="dialog" 
            aria-modal="true"
        >
			{children}
		</div>
	);
}

export default Modal;
