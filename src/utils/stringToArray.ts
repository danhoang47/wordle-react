const DEFAULT_WORD_LENGTH = 5;

const stringToArray = (value: string, length: number = DEFAULT_WORD_LENGTH) => {
	if (value.length === length) {
		return value.split("");
	} else {
		const valueLength = value.length;
		return [...value.split(""), ...new Array<string>(length - valueLength)];
	}
};

export default stringToArray;