import dayjs from "dayjs";
import { CalendarBoxInterface } from "@/lib/types";
import CalendarIcon from "./CalendarIcon";
import CalendarExclamation from "./CalendarExclamation";
import styles from "../calendar/[[...date]]/page.module.css";
import { darkenColor } from "@/lib/functions";

export default function CalendarBox({ day, scalars, vectors }: CalendarBoxInterface) {
    const dayBox = <div>{day}</div>;

    const vectorBoxes = vectors.map((vector, index) => {
        const title = `[${vector.category}] B: ${dayjs(vector.beginDate).format("YYYY/MM/DD")} E: ${dayjs(vector.endDate).format("YYYY/MM/DD")}`;
        return (
            <div key={index} className={styles.vecbox}>
                <CalendarIcon category={vector.category} />
                <CalendarExclamation isImportant={vector.isImportant} />
                <span style={{ backgroundColor: vector.color, border: `2px solid ${darkenColor(vector.color)}` }} title={title} className={styles.description}>
                    {vector.description}
                </span>
            </div>
        );
    });

    const scalarBoxes = scalars.map((scalar, index) => {
        const title = `[${scalar.category}] ${dayjs(scalar.beginDate).format("YYYY/MM/DD")}`;
        return (
            <div key={index} className={styles.scabox}>
                <CalendarIcon category={scalar.category} />
                <CalendarExclamation isImportant={scalar.isImportant} />
                <span style={{ backgroundColor: scalar.color, border: `2px solid ${darkenColor(scalar.color)}` }} title={title} className={styles.description}>
                    {scalar.description}
                </span>
            </div>
        );
    });

    return (
        <div>
            <div className={styles.daybox}>{dayBox}</div>
            <div className={styles.vecboxes}>{vectorBoxes}</div>
            <div className={styles.scaboxes}>{scalarBoxes}</div>
        </div>
    );
}
