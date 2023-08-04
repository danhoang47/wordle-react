import { createPortal } from "react-dom";
import { faGear } from "@fortawesome/free-solid-svg-icons";

import { IconButton } from "@/core/components";
import { useToggle } from "@/core/hooks";
import SettingModal from "./SettingModal";

function SettingItem() {
	const [on, handleToggle] = useToggle(false);

	return (
		<>
			<IconButton
				onClick={() => {
					handleToggle(true);
				}}
				ariaLabel="Setting button"
				icon={faGear}
				size="xl"
			/>
			{on &&
				createPortal(
					<SettingModal handleToggle={handleToggle} />,
					document.body
				)}
		</>
	);
}

export default SettingItem;
