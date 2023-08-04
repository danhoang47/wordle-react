type CSSClasses = {
	[key: string]: boolean;
};

export default function clsx(...input: (string | CSSClasses | undefined)[]): string {
	return input
		.map((value) => {
			if (typeof value === "string") {
				return value ?? "";
			} else if (typeof value === 'object'){
				const separator = " ";
				const initialValue = "";
				return Object.keys(value).reduce((acc, key) => {
					return value[key] ? acc + separator + key : acc;
				}, initialValue);
			} else {
				return "";
			}
		})
		.join(" ");
}
