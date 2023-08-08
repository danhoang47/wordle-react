import { memo } from "react";

import { clsx } from "@/utils";
import { Evaluation } from "@/core/types";

import styles from "./Game.module.scss";

type LetterCellProps = {
	letter?: string;
	ariaLabel?: string;
	role?: string;
	evaluation?: Evaluation;
	isEvaluated: boolean;
	animationDelay: number
};

// eslint-disable-next-line react-refresh/only-export-components
function LetterCell({
	letter,
	role = "img",
	evaluation,
	isEvaluated,
	animationDelay
}: LetterCellProps) {
	console.log('LetterCell: ', isEvaluated)

	return (
		<div
			className={clsx(
				styles["letterCell"],
				isEvaluated && styles[evaluation!],
				isEvaluated && styles['flip'],
			)}
			aria-label={
				isEvaluated
					? `${letter} ${evaluation}`
					: letter
					? letter
					: "empty"
			}
			role={role}
			style={{ animationDelay: `${animationDelay}ms`}}
		>
			{letter}
		</div>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(LetterCell);

// Submit => check state => increase index
// when index change => run callback
