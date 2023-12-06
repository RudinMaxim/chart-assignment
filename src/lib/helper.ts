export function colorRules(
	rule: { operator: string; value: number },
	value: number
) {
	switch (rule.operator) {
		case '=':
			return value === rule.value;

		case '<>':
			return value !== rule.value;

		case '>':
			return value > rule.value;

		case '>=':
			return value >= rule.value;

		case '<':
			return value < rule.value;

		case '<=':
			return value <= rule.value;

		case '==':
			return value == rule.value;

		case '!=':
			return value != rule.value;

		default:
			return false;
	}
}
