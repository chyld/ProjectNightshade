import { Dayjs } from "dayjs";
import { scalarFilter, vectorFilter, getWeeksInCurrentMonth } from "@/lib/functions";
import { getPosts } from "@/lib/queries";

export default async function CalendarBuilder({ theDate }: { theDate: Dayjs }) {
    const indexFirstDayOfMonth = theDate.startOf("month").day();
    const weeksInMonth = getWeeksInCurrentMonth(theDate);
    const firstDayNextMonth = theDate.add(1, "month").startOf("month");
    let dayCounter = theDate.startOf("month");
    const results = await getPosts(theDate);

    return (
        <>
            {Array.from({ length: weeksInMonth }, (_, weekIndex) =>
                Array.from({ length: 7 }, (_, dayOfWeekIndex) => {
                    const key = `w${weekIndex}-d${dayOfWeekIndex}`;

                    if ((weekIndex > 0 || dayOfWeekIndex >= indexFirstDayOfMonth) && dayCounter < firstDayNextMonth) {
                        const scalars = scalarFilter(results, dayCounter);
                        const vectors = vectorFilter(results, dayCounter);

                        dayCounter = dayCounter.add(1, "day");
                        return <div key={key}>abc</div>;
                    } else {
                        return <div key={key}>---</div>;
                    }
                })
            )}
        </>
    );
}
