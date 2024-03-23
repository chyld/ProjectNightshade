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
        <div id="creation">
            <div id="header">
                <div id="current">New Post</div>
                <div id="nav">
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
                    <div id="form">
                        <div>
                            <textarea name="description"></textarea>
                        </div>
                        <div>
                            <input type="text" name="category" value="health" />
                        </div>
                        <div>
                            Is Important?
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
