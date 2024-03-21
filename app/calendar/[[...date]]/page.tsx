import dayjs from "dayjs";
import { CalendarParamsType } from "@/lib/types";
import CalendarHeader from "@/app/components/CalendarHeader";
import CalendarDaysOfWeek from "@/app/components/CalendarDaysOfWeek";
import CalendarBuilder from "@/app/components/CalendarBuilder";

export default async function Calendar({ params }: CalendarParamsType) {
    const theDate = params.date ? dayjs(`${params.date}-01`) : dayjs();

    return (
        <div>
            <CalendarHeader theDate={theDate} />
            <div id="calendar">
                <CalendarDaysOfWeek></CalendarDaysOfWeek>
                <CalendarBuilder theDate={theDate} />
            </div>
        </div>
    );
}
