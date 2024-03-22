"use client";

import { createPost } from "@/lib/queries";
import { DataModelInterface } from "@/lib/types";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { dateFormToDate } from "@/lib/functions";

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
        <div>
            <Link href="/calendar">Calendar</Link>
            <form action={createInvoice}>
                <textarea name="description"></textarea>
                <input type="text" name="category" />
                <input type="checkbox" name="isImportant" />
                <input type="date" name="beginDate" />
                <input type="date" name="endDate" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
