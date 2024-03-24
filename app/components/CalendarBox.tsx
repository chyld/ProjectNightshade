import dayjs from "dayjs";
import { DataModelInterface } from "@/lib/types";
import classNames from "classnames";

export interface CalendarBoxInterface {
    day: number;
    scalars: DataModelInterface[];
    vectors: DataModelInterface[];
}

function iconSpan(icon: string, category: string, color: string) {
    switch (category) {
        case "nature":
            icon = "eco";
            break;
        case "danger":
            icon = "warning";
            break;
    }

    return (
        <span style={{ backgroundColor: color }} className={classNames("material-symbols-outlined", "bullet")}>
            {icon}
        </span>
    );
}

export default function CalendarBox({ day, scalars, vectors }: CalendarBoxInterface) {
    const dayBox = <div>{day}</div>;

    const vectorBoxes = vectors.map((vector, index) => {
        const title = `[${vector.category}] B: ${dayjs(vector.beginDate).format("YYYY/MM/DD")} E: ${dayjs(vector.endDate).format("YYYY/MM/DD")}`;
        return (
            <div key={index} className="vecbox">
                {iconSpan("priority", vector.category, vector.color)}
                <span title={title} className={classNames("description", { important: vector.isImportant })}>
                    {vector.description}
                </span>
            </div>
        );
    });

    const scalarBoxes = scalars.map((scalar, index) => {
        const title = `[${scalar.category}] ${dayjs(scalar.beginDate).format("YYYY/MM/DD")}`;
        return (
            <div key={index} className="scabox">
                {iconSpan("priority", scalar.category, scalar.color)}
                <span title={title} className={classNames("description", { important: scalar.isImportant })}>
                    {scalar.description}
                </span>
            </div>
        );
    });

    return (
        <div className="full">
            <div className="daybox">{dayBox}</div>
            <div className="vecboxes">{vectorBoxes}</div>
            <div className="scaboxes">{scalarBoxes}</div>
        </div>
    );
}
