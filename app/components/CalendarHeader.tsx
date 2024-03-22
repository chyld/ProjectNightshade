import Link from "next/link";
import { Dayjs } from "dayjs";

export default function CalendarHeader({ urlDate }: { urlDate: Dayjs }) {
    return (
        <div id="header">
            <div id="current">{urlDate.format("MMMM YYYY")}</div>
            <div id="nav">
                <div>
                    <Link href={`/new`}>{"[New]"}</Link>
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
