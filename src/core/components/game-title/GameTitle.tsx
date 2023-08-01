import styles from "./GameTitle.module.scss";
import { clsx } from "@/utils";

type GameTitleProps = {
	size?: "sm" | "md" | "lg" | "xl";
};

function GameTitle({ size = "lg" }: GameTitleProps) {
	return (
		<span className={clsx(styles["game-title"], styles[size])}>Wordle</span>
	);
}

export default GameTitle;
