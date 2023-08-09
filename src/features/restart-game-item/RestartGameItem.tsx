import { useRef } from "react";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";

import { Button, Icon } from "@/core/components";

import styles from './RestartGameItem.module.scss';

function RestartGameItem({
	onRestartButtonClick,
}: {
	onRestartButtonClick: () => void;
}) {
	const restartButtonRef = useRef<HTMLButtonElement>(null);

	return (
		<div tabIndex={1} className={styles['restartGameItem']}>
			<Button
				ref={restartButtonRef}
				onClick={onRestartButtonClick}
				onFocus={() => {
					restartButtonRef.current?.focus();
				}}
				className={styles['restartGameButton']}
			>
				<Icon icon={faArrowRotateRight} className={styles['restartIcon']}/>
			</Button>
			<p className={styles['title']}>Restart Game</p>
		</div>
	);
}

export default RestartGameItem;
