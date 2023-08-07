import { CSSProperties, memo } from "react";

import { clsx } from "@/utils";
import { Evaluation } from "@/core/types";

import styles from "./Game.module.scss";

type LetterCellProps = {
	letter?: string;
	ariaLabel?: string;
	role?: string;
	evaluation?: Evaluation;
	isEvaluated: boolean;
	style?: CSSProperties;
};

// eslint-disable-next-line react-refresh/only-export-components
function LetterCell({
	letter,
	role = "img",
	evaluation,
	isEvaluated,
	style,
}: LetterCellProps) {
	console.log(isEvaluated);
	const evaluatedClassnames =
		evaluation && `${styles[evaluation]} ${styles["flip"]}`;

	return (
		<div
			className={clsx(
				styles["letterCell"],
				isEvaluated && evaluatedClassnames
			)}
			aria-label={
				isEvaluated
					? `${letter} ${evaluation}`
					: letter
					? letter
					: "empty"
			}
			role={role}
			style={style}
		>
			{letter}
		</div>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export default memo(LetterCell);

// Submit => check state => increase index
// when index change => run callback
