import { DataModelInterface } from "@/lib/types";

export interface CalendarBoxInterface {
    day: number;
    scalars: DataModelInterface[];
    vectors: DataModelInterface[];
}

export default function CalendarBox({ day, scalars, vectors }: CalendarBoxInterface) {
    const dayBox = <div>{day}</div>;

    const scalarBoxes = scalars.map((scalar, index) => {
        return (
            <div key={index}>
                <div>{scalar.description}</div>
                <div>{scalar.category}</div>
                <div>{scalar.isImportant}</div>
            </div>
        );
    });

    const vectorBoxes = vectors.map((vector, index) => {
        return (
            <div key={index}>
                <div>{vector.description}</div>
                <div>{vector.category}</div>
                <div>{vector.isImportant}</div>
            </div>
        );
    });

    return (
        <div>
            <div>{dayBox}</div>
            <div>{scalarBoxes}</div>
            <div>{vectorBoxes}</div>
        </div>
    );
}
