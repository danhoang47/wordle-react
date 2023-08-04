import { ComponentProps } from "react";

import { Button, Icon } from "@/core/components";

type IconButtonProps = ComponentProps<typeof Button> &
	ComponentProps<typeof Icon>;

function IconButton({
	onClick,
	icon,
	ariaLabel,
	size = "lg",
}: IconButtonProps) {
	return (
		<Button
			onClick={onClick}
			ariaLabel={ariaLabel}
		>
			<Icon icon={icon} size={size} />
		</Button>
	);
}

export default IconButton;
