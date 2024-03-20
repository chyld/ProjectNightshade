import dayjs, { Dayjs } from "dayjs";
import styles from "./page.module.css";
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
        <div className={styles.calendar}>
            {daysOfTheWeek.map((day) => (
                <div key={day}>{day}</div>
            ))}

            {Array.from({ length: weeksInMonth }, (_, weekIndex) =>
                Array.from({ length: 7 }, (_, dayOfWeekIndex) => {
                    const key = `w${weekIndex}-d${dayOfWeekIndex}`;

                    if ((weekIndex > 0 || dayOfWeekIndex >= indexFirstDayOfMonth) && dayCounter < daysInMonth) {
                        dayCounter += 1;

                        let descriptions: ReactNode[] = [];
                        for (const [index, result] of results.entries()) {
                            if (dayjs(result.beginDate).date() == dayCounter) {
                                const icon = (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
                                        <path
                                            fill-rule="evenodd"
                                            d="M15 8c0 .982-.472 1.854-1.202 2.402a2.995 2.995 0 0 1-.848 2.547 2.995 2.995 0 0 1-2.548.849A2.996 2.996 0 0 1 8 15a2.996 2.996 0 0 1-2.402-1.202 2.995 2.995 0 0 1-2.547-.848 2.995 2.995 0 0 1-.849-2.548A2.996 2.996 0 0 1 1 8c0-.982.472-1.854 1.202-2.402a2.995 2.995 0 0 1 .848-2.547 2.995 2.995 0 0 1 2.548-.849A2.995 2.995 0 0 1 8 1c.982 0 1.854.472 2.402 1.202a2.995 2.995 0 0 1 2.547.848c.695.695.978 1.645.849 2.548A2.996 2.996 0 0 1 15 8Zm-3.291-2.843a.75.75 0 0 1 .135 1.052l-4.25 5.5a.75.75 0 0 1-1.151.043l-2.25-2.5a.75.75 0 1 1 1.114-1.004l1.65 1.832 3.7-4.789a.75.75 0 0 1 1.052-.134Z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                );

                                descriptions.push(
                                    <div key={index}>
                                        {icon} {`${result.description} [${result.category}]`}
                                    </div>
                                );
                            }
                        }

                        return (
                            <div>
                                <div key={key}>
                                    <span className={styles.date}> {dayCounter} </span>
                                </div>
                                <div>{descriptions}</div>
                            </div>
                        );
                    } else {
                        return <div key={key}></div>;
                    }
                })
            )}
        </div>
    );
}
