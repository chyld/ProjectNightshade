import dayjs from "dayjs";
import { CalendarParamsType } from "@/lib/types";
import CalendarHeader from "@/app/components/CalendarHeader";
import CalendarDaysOfWeek from "@/app/components/CalendarDaysOfWeek";
import CalendarBuilder from "@/app/components/CalendarBuilder";

export default async function Calendar({ params }: CalendarParamsType) {
    const urlDate = params.date ? dayjs(`${params.date}-01`) : dayjs();

    return (
        <div>
            <CalendarHeader urlDate={urlDate} />
            <div id="calendar">
                <CalendarDaysOfWeek></CalendarDaysOfWeek>
                <CalendarBuilder urlDate={urlDate} />
            </div>
        </div>
    );
}
