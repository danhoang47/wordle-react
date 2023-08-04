import { Switch } from "@/core/components";
import { useGameSettingContext } from "@/core/hooks";
import { GameSetting, SettingOption } from "@/core/types";
import Link from "@/core/components/link/Link";

import styles from "./Setting.module.scss";

const renderOption = <T extends SettingOption>(option: T) => {
	switch (option.type) {
		case "switch":
			return <ModifiableSettingOption {...option} />;
		case "link":
			return (
				<Link
					href={option.href}
					ariaLabel={option.ariaLabel}
					className={styles["item"]}
				>
					{option.label}
				</Link>
			);
		default:
			throw new Error("option not supported");
	}
};

type SettingOptionProps = SettingOption;

const ModifiableSettingOption = <
	P extends { stateKey: keyof GameSetting; ariaLabel?: string }
>(
	props: P
) => {
	const gameSettingContextValue = useGameSettingContext()!;
	const { handleGameSettingsChange } = gameSettingContextValue;
	const switchState = gameSettingContextValue[props.stateKey];

	return (
		<Switch
			ariaLabel={props.ariaLabel}
			state={switchState}
			onSwitch={() => {
				handleGameSettingsChange(props.stateKey, !switchState);
			}}
			className={styles["item"]}
		/>
	);
};

function SettingOption(props: SettingOptionProps) {
	return (
		<div className={styles["setting-option"]}>
			<div className={styles["setting-option-label"]}>
				<p className={styles["title"]}>{props.title}</p>
				{props.description && (
					<span className={styles["description"]}>
						{props.description}
					</span>
				)}
			</div>
			{renderOption(props)}
		</div>
	);
}

export default SettingOption;
