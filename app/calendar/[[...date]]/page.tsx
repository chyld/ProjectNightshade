import dayjs, { Dayjs } from "dayjs";

import { CalendarParams } from "@/lib/types";
import { getWeeksInCurrentMonth } from "@/lib/functions";
import { PrismaClient } from "@prisma/client";
import { ReactNode } from "react";

export default async function Calendar({ params }: CalendarParams) {
    const theDate = params.date ? dayjs(`${params.date}-01`) : dayjs();
    const indexFirstDayOfMonth = theDate.startOf("month").day();
    const weeksInMonth = getWeeksInCurrentMonth(theDate);
    const daysInMonth = theDate.endOf("month").date();
    let dayCounter = 0;
    const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const prisma = new PrismaClient();
    const results = await prisma.post.findMany();

    return (
        <div className="p-1 max-w-full bg-orange-500">
            <div className="flex flex-row flex-nowrap">
                {daysOfTheWeek.map((day) => (
                    <div key={day} className="flex-1 p-2 bg-gray-300">
                        {day}
                    </div>
                ))}
            </div>

            {Array.from({ length: weeksInMonth }, (_, weekIndex) => {
                return (
                    <div key={`w${weekIndex}`} className="flex flex-row flex-nowrap">
                        {Array.from({ length: 7 }, (_, dayOfWeekIndex) => {
                            const key = `w${weekIndex}-d${dayOfWeekIndex}`;

                            if ((weekIndex > 0 || dayOfWeekIndex >= indexFirstDayOfMonth) && dayCounter < daysInMonth) {
                                dayCounter += 1;

                                let descriptions: ReactNode[] = [];
                                for (const [index, result] of results.entries()) {
                                    if (dayjs(result.beginDate).date() == dayCounter) {
                                        descriptions.push(<div key={index}>{result.description}</div>);
                                    }
                                }

                                return (
                                    <div key={key} className="flex-1 p-2 bg-gray-200">
                                        <div className="inline-block ring-2 ring-blue-500">{dayCounter}</div> <div>{descriptions}</div>
                                    </div>
                                );
                            } else {
                                return <div key={key} className="flex-1 p-2 bg-gray-100"></div>;
                            }
                        })}
                    </div>
                );
            })}
        </div>
    );
}
