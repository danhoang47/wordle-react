import { Evaluation } from "@/core/types";

const getEvaluation = (
	keyword: string,
	keyLetter: string,
	keyLetterIndex: number
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
