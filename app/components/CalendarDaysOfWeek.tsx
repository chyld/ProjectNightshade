const daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function CalendarDaysOfWeek() {
    return (
        <>
            {daysOfTheWeek.map((day, index) => (
                <div key={index}>{day}</div>
            ))}
        </>
    );
}
