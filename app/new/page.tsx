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
            color: formData.get("color") as string,
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
                                <option value="job">Job</option>
                                <option value="danger">Danger</option>
                            </select>
                        </div>
                        <div>
                            <label>Border</label>
                            <select name="color">
                                <option value="#fafaf9">Stone 0</option>
                                <option value="#f5f5f4">Stone 1</option>
                                <option value="#e7e5e4">Stone 2</option>
                                <option value="#d6d3d1">Stone 3</option>
                                <option value="#a8a29e">Stone 4</option>
                                <option value="#f87171">Red</option>
                                <option value="#fb923c">Orange</option>
                                <option value="#fbbf24">Amber</option>
                                <option value="#facc15">Yellow</option>
                                <option value="#a3e635">Lime</option>
                                <option value="#4ade80">Green</option>
                                <option value="#34d399">Emerald</option>
                                <option value="#2dd4bf">Teal</option>
                                <option value="#22d3ee">Cyan</option>
                                <option value="#38bdf8">Sky</option>
                                <option value="#60a5fa">Blue</option>
                                <option value="#818cf8">Indigo</option>
                                <option value="#a78bfa">Violet</option>
                                <option value="#c084fc">Purple</option>
                                <option value="#e879f9">Fuchsia</option>
                                <option value="#f472b6">Pink</option>
                                <option value="#fb7185">Rose</option>
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
