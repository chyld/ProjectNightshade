import classNames from "classnames";
import styles from "../calendar/[[...date]]/page.module.css";
import { darkenColor } from "@/lib/functions";

export default function CalendarIcon({ category }: { category: string }) {
    let icon = "";
    let color = "";

    switch (category) {
        case "health":
            icon = "health_and_safety";
            color = "#BAE6FD"; // Sky
            break;
        case "exercise":
            icon = "vital_signs";
            color = "#A5F3FC"; // Cyan
            break;
        case "fasting":
            icon = "no_meals";
            color = "#F5D0FE"; // Fuchsia
            break;
        case "nature":
            icon = "eco";
            color = "#D9F99D"; // Lime
            break;
        case "code":
            icon = "code";
            color = "#DDD6FE"; // Violet
            break;
        case "math":
            icon = "calculate";
            color = "#C7D2FE"; // Indigo
            break;
        case "job":
            icon = "work";
            color = "#E7E5E4"; // Stone
            break;
        case "danger":
            icon = "warning";
            color = "#FECACA"; //Red
            break;
    }

    return (
        <span style={{ backgroundColor: color, border: `2px solid ${darkenColor(color)}` }} className={classNames("material-symbols-outlined", styles.bullet)}>
            {icon}
        </span>
    );
}
