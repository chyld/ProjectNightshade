import Link from "next/link";
import { Dayjs } from "dayjs";

export default function CalendarHeader({ theDate }: { theDate: Dayjs }) {
    return (
        <div id="header">
            <div>{theDate.format("MMMM YYYY")}</div>
            <ul>
                <li>
                    <Link href={`/calendar/${theDate.subtract(1, "month").format("YYYY-MM")}`}>{"< Back"}</Link>
                </li>
                <li>
                    <Link href={`/calendar/${theDate.add(1, "month").format("YYYY-MM")}`}>{"Next >"}</Link>
                </li>
            </ul>
        </div>
    );
}
