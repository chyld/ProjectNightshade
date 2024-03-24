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

export interface CalendarBoxInterface {
    day: number;
    scalars: DataModelInterface[];
    vectors: DataModelInterface[];
}
