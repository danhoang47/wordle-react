export type SettingOption = SwitchType | LinkType;

export type BaseSettingOption = {
	title: string;
	description?: string;
	ariaLabel: string;
};

export type SwitchType = BaseSettingOption & {
	type: "switch";
	stateKey: keyof GameSetting;
};

export type LinkType = BaseSettingOption & {
	type: "link";
	href: string;
	label: string;
};

export type GameSetting = {
	hardMode: boolean;
	darkTheme: boolean;
	highContrastMode: boolean;
};


export type Evaluation = "absent" | "present" | "correct"

export type ValueChangeHandler<T> = (key: keyof T, value: T[keyof T]) => void;

export type ContextType<T, HandlerFunc extends string> = T &
	Record<HandlerFunc, ValueChangeHandler<T>>;

/**
 * 1. Load state from Local Storage
 * 2. Listing setting option
 * 3. Handle onSettingOptionChange
 *
 */
