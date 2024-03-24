import Link from "next/link";
import { Dayjs } from "dayjs";
import styles from "../calendar/[[...date]]/page.module.css";

export default function CalendarHeader({ urlDate }: { urlDate: Dayjs }) {
    return (
        <div id={styles.header}>
            <div id={styles.title}>{urlDate.format("MMMM YYYY")}</div>
            <div id={styles.nav}>
                <div>
                    <Link href={`/new`}>{"[New]"}</Link>
                </div>
                <div>
                    <Link href={`/list`}>{"[List]"}</Link>
                </div>
                <div>
                    <Link href={`/calendar`}>{"[Today]"}</Link>
                </div>
                <div>
                    <Link href={`/calendar/${urlDate.subtract(1, "month").format("YYYY-MM")}`}>{"[Back]"}</Link>
                </div>
                <div>
                    <Link href={`/calendar/${urlDate.add(1, "month").format("YYYY-MM")}`}>{"[Next]"}</Link>
                </div>
            </div>
        </div>
    );
}
