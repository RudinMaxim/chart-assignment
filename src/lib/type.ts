export interface Data {
	label: string;
	values: number[];
}
export interface ColorRule {
	operator: '=' | '<>' | '>' | '<' | '>=' | '<=' | '==' | '!=';
	value: number | null;
}

export interface ColorRules {
	red: ColorRule[];
	yellow: ColorRule[];
	green: ColorRule[];
}

export interface IHistogram {
	label: string;
	values: number[];
	ColorRules?: ColorRule;
}

export interface IColorPanel {
	label: string;
	onRulesChange: (rules: ColorRules) => void;
}
