import { Dayjs } from "dayjs";
import { DataModelInterface } from "../lib/types";

export function getWeeksInCurrentMonth(urlDate: Dayjs) {
    const firstDayOfMonth = urlDate.startOf("month");
    const lastDayOfMonth = urlDate.endOf("month");
    const daysInMonth = lastDayOfMonth.date();
    const indexFirstDayOfMonth = firstDayOfMonth.day();
    const totalDaysAdjusted = daysInMonth + indexFirstDayOfMonth;
    const weeksInMonth = Math.ceil(totalDaysAdjusted / 7);
    return weeksInMonth;
}

export function scalarFilter(results: DataModelInterface[], dayCounter: Dayjs): DataModelInterface[] {
    return results.filter((result, index) => !result.endDate && result.beginDate.getDate() === dayCounter.date());
}

export function vectorFilter(results: DataModelInterface[], dayCounter: Dayjs): DataModelInterface[] {
    return results.filter((result, index) => result.beginDate && result.endDate && dayCounter.isAfter(result.beginDate) && dayCounter.isBefore(result.endDate));
}
