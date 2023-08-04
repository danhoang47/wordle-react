import { clsx } from "@/utils";
import { ReactNode } from "react";

type ModalFooterProps = {
	children?: ReactNode;
	className?: string;
};

function ModalFooter({ children, className }: ModalFooterProps) {
	return <div className={clsx(className)}>{children}</div>;
}

export default ModalFooter;
