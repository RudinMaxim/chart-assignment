import { ColorRules } from './type';

export const labels: number[] = [1, 2, 3, 4, 5];

export const DEFAULT_COLOR_RULES: Record<string, ColorRules> = {
	metric1: {
		red: [{ operator: '=', value: 0 }],
		yellow: [
			{ operator: '>', value: 0 },
			{ operator: '<', value: 100 },
			{ operator: '>', value: 100 },
		],
		green: [{ operator: '=', value: 100 }],
	},

	metric2: {
		red: [{ operator: '<>', value: 100 }],
		yellow: [{ operator: '==', value: null }],
		green: [{ operator: '=', value: 100 }],
	},

	metric3: {
		red: [
			{ operator: '<', value: 70 },
			{ operator: '>', value: 100 },
		],
		yellow: [
			{ operator: '>=', value: 70 },
			{ operator: '<', value: 90 },
		],
		green: [
			{ operator: '>=', value: 90 },
			{ operator: '<=', value: 100 },
		],
	},

	metric4: {
		red: [{ operator: '<', value: 60 }],
		yellow: [
			{ operator: '>=', value: 60 },
			{ operator: '>', value: 90 },
		],
		green: [{ operator: '>=', value: 90 }],
	},

	metric5: {
		red: [{ operator: '!=', value: 100 }],
		yellow: [{ operator: '==', value: null }],
		green: [{ operator: '=', value: 100 }],
	},
};
