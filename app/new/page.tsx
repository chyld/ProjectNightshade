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
                            <div>
                                <input type="text" name="category" />
                            </div>
                            <div className="note">[danger] [nature] [code] [health]</div>
                        </div>
                        <div>
                            <select name="color">
                                <option value="#a8a29e">Stone</option>
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
