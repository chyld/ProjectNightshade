import styles from "../calendar/[[...date]]/page.module.css";

const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CalendarDaysOfWeek() {
    return (
        <>
            {daysOfTheWeek.map((day, index) => (
                <div key={index} className={styles.daysofweek}>
                    {day}
                </div>
            ))}
        </>
    );
}
