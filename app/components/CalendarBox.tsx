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
            <div key={index} className="scabox">
                <div className="description">{scalar.description}</div>
                <div className="category">{scalar.category}</div>
            </div>
        );
    });

    const vectorBoxes = vectors.map((vector, index) => {
        return (
            <div key={index} className="vecbox">
                <div className="description">{vector.description}</div>
                <div className="category">{vector.category}</div>
            </div>
        );
    });

    return (
        <div className="full">
            <div className="daybox">{dayBox}</div>
            <div className="scaboxes">{scalarBoxes}</div>
            <div className="vecboxes">{vectorBoxes}</div>
        </div>
    );
}
