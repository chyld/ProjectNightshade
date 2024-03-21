import Link from "next/link";
import { Dayjs } from "dayjs";

export default function CalendarHeader({ urlDate }: { urlDate: Dayjs }) {
    return (
        <div id="header">
            <div>{urlDate.format("MMMM YYYY")}</div>
            <ul>
                <li>
                    <Link href={`/calendar/${urlDate.subtract(1, "month").format("YYYY-MM")}`}>{"< Back"}</Link>
                </li>
                <li>
                    <Link href={`/calendar/${urlDate.add(1, "month").format("YYYY-MM")}`}>{"Next >"}</Link>
                </li>
            </ul>
        </div>
    );
}
