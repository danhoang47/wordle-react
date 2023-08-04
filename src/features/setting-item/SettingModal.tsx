import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { Icon, Modal } from "@/core/components";
import SettingOption from "./SettingOption";

import styles from "./Setting.module.scss";

import settingOptions from "./settingOptions";

function SettingModal({
	handleToggle,
}: {
	handleToggle: (value: boolean) => void;
}) {
	const handleCloseModal = () => {
		handleToggle(false);
	};

	return (
		<Modal label="Setting Modal" onClickOutside={handleCloseModal}>
			<Modal.CloseButton onClick={handleCloseModal}>
				<Icon icon={faXmark} size="md" />
			</Modal.CloseButton>
			<Modal.Header>settings</Modal.Header>
			<Modal.Body>
				{settingOptions.map((settingOption) => (
					<SettingOption
						{...settingOption}
						key={settingOption.title}
					/>
				))}
			</Modal.Body>
			<Modal.Footer className={styles['setting-footer']}>
				<div className={styles["copyright"]}>2023 Quoc Dat</div>
				<div>#fff</div>
			</Modal.Footer>
		</Modal>
	);
}

export default SettingModal;
