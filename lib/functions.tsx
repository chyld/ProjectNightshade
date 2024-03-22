import dayjs, { Dayjs } from "dayjs";
import { DataModelInterface } from "../lib/types";
import isBetween from "dayjs/plugin/isBetween";
dayjs.extend(isBetween);

export function dateFormToDate(date: FormDataEntryValue | null, shouldCreateNew: boolean) {
    if (date) {
        const [year, month, day] = (date as string).split("-").map(Number);
        return new Date(year, month - 1, day);
    } else if (shouldCreateNew) {
        return new Date();
    } else {
        return null;
    }
}

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
    return results.filter((result, index) => result.beginDate && result.endDate && dayCounter.isBetween(result.beginDate, result.endDate, "day", "[]"));
}
