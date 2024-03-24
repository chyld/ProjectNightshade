import { Dayjs } from "dayjs";
import { scalarFilter, vectorFilter, getWeeksInCurrentMonth } from "@/lib/functions";
import { getPosts } from "@/lib/queries";
import CalendarBox from "./CalendarBox";

export default async function CalendarBuilder({ urlDate }: { urlDate: Dayjs }) {
    const indexFirstDayOfMonth = urlDate.startOf("month").day();
    const weeksInMonth = getWeeksInCurrentMonth(urlDate);
    const firstDayNextMonth = urlDate.add(1, "month").startOf("month");
    let dayCounter = urlDate.startOf("month");
    const results = await getPosts(urlDate);

    return (
        <>
            {Array.from({ length: weeksInMonth }, (_, weekIndex) =>
                Array.from({ length: 7 }, (_, dayOfWeekIndex) => {
                    const key = `w${weekIndex}-d${dayOfWeekIndex}`;

                    if ((weekIndex > 0 || dayOfWeekIndex >= indexFirstDayOfMonth) && dayCounter < firstDayNextMonth) {
                        const scalars = scalarFilter(results, dayCounter);
                        const vectors = vectorFilter(results, dayCounter);

                        const box = <CalendarBox key={key} day={dayCounter.date()} scalars={scalars} vectors={vectors} />;
                        dayCounter = dayCounter.add(1, "day");
                        return box;
                    } else {
                        return <div key={key}></div>;
                    }
                })
            )}
        </>
    );
}
