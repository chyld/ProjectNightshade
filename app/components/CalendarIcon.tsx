import classNames from "classnames";
import styles from "../calendar/[[...date]]/page.module.css";

export default function CalendarIcon({ category }: { category: string }) {
    let icon = "";
    let color = "";

    switch (category) {
        case "health":
            icon = "health_and_safety";
            color = "#38bdf8"; // Sky
            break;
        case "exercise":
            icon = "vital_signs";
            color = "#22d3ee"; // Cyan
            break;
        case "fasting":
            icon = "no_meals";
            color = "#e879f9"; // Fuchsia
            break;
        case "nature":
            icon = "eco";
            color = "#a3e635"; // Lime
            break;
        case "code":
            icon = "code";
            color = "#a78bfa"; // Violet
            break;
        case "math":
            icon = "calculate";
            color = "#818cf8"; // Indigo
            break;
        case "job":
            icon = "work";
            color = "#a8a29e"; // Stone
            break;
        case "danger":
            icon = "warning";
            color = "#f87171"; //Red
            break;
    }

    return (
        <span style={{ backgroundColor: color }} className={classNames("material-symbols-outlined", styles.bullet)}>
            {icon}
        </span>
    );
}
