"use client";

import { createPost } from "@/lib/queries";
import { DataModelInterface } from "@/lib/types";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { dateFormToDate } from "@/lib/functions";
import styles from "./page.module.css";

export default function Page() {
    const router = useRouter();

    async function createInvoice(formData: FormData) {
        const rawFormData: Omit<DataModelInterface, "id"> = {
            description: formData.get("description") as string,
            category: formData.get("category") as string,
            isImportant: !!formData.get("isImportant"),
            beginDate: dateFormToDate(formData.get("beginDate"), true)!,
            endDate: dateFormToDate(formData.get("endDate"), false),
        };

        createPost(rawFormData);
        router.push("/calendar");
    }

    return (
        // colors
        // https://tailwindcss.com/docs/customizing-colors
        // https://tailwindcolor.com/
        <div>
            <div id={styles.header}>
                <div id={styles.title}>New Post</div>
                <div id={styles.nav}>
                    <div>
                        <Link href={`/list`}>{"[List]"}</Link>
                    </div>
                    <div>
                        <Link href={`/calendar`}>{"[Calendar]"}</Link>
                    </div>
                </div>
            </div>
            <div>
                <form action={createInvoice}>
                    <div id={styles.form}>
                        <div>
                            <textarea name="description"></textarea>
                        </div>
                        <div>
                            <label>Category</label>
                            <select name="category">
                                <option value="health">Health</option>
                                <option value="exercise">Exercise</option>
                                <option value="fasting">Fasting</option>
                                <option value="nature">Nature</option>
                                <option value="code">Code</option>
                                <option value="math">Math</option>
                                <option value="science">Science</option>
                                <option value="job">Job</option>
                                <option value="danger">Danger</option>
                            </select>
                        </div>
                        <div>
                            <label>Important?</label>
                            <input type="checkbox" name="isImportant" />
                        </div>
                        <div>
                            <input type="date" name="beginDate" />
                            <input type="date" name="endDate" />
                        </div>
                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
