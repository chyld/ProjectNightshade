export type CalendarParamsType = {
    params: {
        date?: string;
    };
};

export interface DataModelInterface {
    id: number;
    description: string;
    category: string;
    color: string;
    isImportant: boolean;
    beginDate: Date;
    endDate: Date | null;
}
