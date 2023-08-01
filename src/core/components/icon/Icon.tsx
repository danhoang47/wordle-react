import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

function Icon({ icon }: { icon: IconProp }) {
	return <FontAwesomeIcon icon={icon} />;
}

export default Icon;
