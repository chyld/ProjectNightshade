import { Dayjs } from "dayjs";

export function getWeeksInCurrentMonth(theDate: Dayjs) {
    const firstDayOfMonth = theDate.startOf("month");
    const lastDayOfMonth = theDate.endOf("month");
    const daysInMonth = lastDayOfMonth.date();
    const indexFirstDayOfMonth = firstDayOfMonth.day();
    const totalDaysAdjusted = daysInMonth + indexFirstDayOfMonth;
    const weeksInMonth = Math.ceil(totalDaysAdjusted / 7);
    return weeksInMonth;
}
