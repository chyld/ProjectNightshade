import styles from "../calendar/[[...date]]/page.module.css";

export default function CalendarExclamation({ isImportant }: { isImportant: boolean }) {
    if (isImportant) {
        return <span className={styles.important}>!!</span>;
    }
}
