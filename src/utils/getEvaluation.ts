import { Evaluation } from "@/core/types";

const getEvaluation = (
	keyLetter: string,
	keyLetterIndex: number,
	keyword: string
): Evaluation | undefined => {
	if (!keyword) return undefined;

	const keywordSplitedIntoLetters = keyword.split("");

	if (keywordSplitedIntoLetters[keyLetterIndex] === keyLetter) {
		return "correct";
	} else if (keywordSplitedIntoLetters.includes(keyLetter)) {
		return "present";
	} else {
		return "absent";
	}
};

export default getEvaluation;
