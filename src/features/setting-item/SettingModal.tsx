import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { Icon, Modal } from "@/core/components";

function SettingModal({
	handleToggle,
}: {
	handleToggle: (value: boolean) => void;
}) {
    const handleCloseModal = () => {
        handleToggle(false);
    }

	return (
		<Modal
			label="Setting Modal"
			onClickOutside={handleCloseModal}
		>
            <Modal.CloseButton onClick={handleCloseModal}>
                <Icon icon={faXmark}/>
            </Modal.CloseButton>
        </Modal>
	);
}

export default SettingModal;
