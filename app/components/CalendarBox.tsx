import dayjs from "dayjs";
import { DataModelInterface } from "@/lib/types";
import classNames from "classnames";

export interface CalendarBoxInterface {
    day: number;
    scalars: DataModelInterface[];
    vectors: DataModelInterface[];
}

function iconSpan(name: string, category: string) {
    const danger = category === "danger";
    return <span className={classNames("material-symbols-outlined", "bullet", { danger })}>{name}</span>;
}

export default function CalendarBox({ day, scalars, vectors }: CalendarBoxInterface) {
    const dayBox = <div>{day}</div>;

    const vectorBoxes = vectors.map((vector, index) => {
        const title = `[${vector.category}] B: ${dayjs(vector.beginDate).format("YYYY/MM/DD")} E: ${dayjs(vector.endDate).format("YYYY/MM/DD")}`;
        return (
            <div key={index} className={classNames("vecbox", { important: vector.isImportant })}>
                {iconSpan("flash_on", vector.category)}
                <span title={title} className="description">
                    {vector.description}
                </span>
            </div>
        );
    });

    const scalarBoxes = scalars.map((scalar, index) => {
        const title = `[${scalar.category}] ${dayjs(scalar.beginDate).format("YYYY/MM/DD")}`;
        return (
            <div key={index} className={classNames("scabox", { important: scalar.isImportant })}>
                {iconSpan("priority", scalar.category)}
                <span title={title} className="description">
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
