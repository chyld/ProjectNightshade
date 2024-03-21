import dayjs, { Dayjs } from "dayjs";
import styles from "./page.module.css";
import classNames from "classnames";
import { CalendarParams } from "@/lib/types";
import { getWeeksInCurrentMonth } from "@/lib/functions";
import { PrismaClient } from "@prisma/client";
import { ReactNode } from "react";
import Link from "next/link";

export default async function Calendar({ params }: CalendarParams) {
    const theDate = params.date ? dayjs(`${params.date}-01`) : dayjs();
    const indexFirstDayOfMonth = theDate.startOf("month").day();
    const weeksInMonth = getWeeksInCurrentMonth(theDate);
    const daysInMonth = theDate.endOf("month").date();
    let dayCounter = 0;
    const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // -------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------
    const prisma = new PrismaClient({
        log: [
            {
                emit: "event",
                level: "query",
            },
            "info",
            "warn",
            "error",
        ],
    });

    prisma.$on("query", (e) => {
        console.log("Query:", e);
    });

    const results = await prisma.post.findMany({
        where: {
            beginDate: {
                gte: theDate.startOf("month").toDate(),
                lte: theDate.endOf("month").toDate(),
            },
        },
    });

    console.log("results:", results);
    // -------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------
    // -------------------------------------------------------------------------------------------

    return (
        <div>
            <div>{theDate.format("MMMM YYYY")}</div>
            <div>
                <Link href={`/calendar/${theDate.subtract(1, "month").format("YYYY-MM")}`}>{"< Back"}</Link>
                <span>&nbsp;&nbsp;&nbsp;</span>
                <Link href={`/calendar/${theDate.add(1, "month").format("YYYY-MM")}`}>{"Next >"}</Link>
            </div>

            <div className={styles.calendar}>
                {daysOfTheWeek.map((day) => (
                    <div key={day} className={styles.header}>
                        {day}
                    </div>
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
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={styles.icon}>
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                                            />
                                        </svg>
                                    );

                                    descriptions.push(
                                        <div title={result.beginDate.toLocaleString()} key={index} className={classNames(styles.description, { [styles.important]: result.isImportant })}>
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
        </div>
    );
}
