import Link from "next/link";
import { getAllPosts } from "@/lib/queries";
import dayjs from "dayjs";
import classNames from "classnames";

export default async function List() {
    const posts = await getAllPosts();

    return (
        <div>
            <div id="header">
                <div id="current">The List</div>
                <div id="nav">
                    <div>
                        <Link href={`/new`}>{"[New]"}</Link>
                    </div>
                    <div>
                        <Link href={`/calendar`}>{"[Calendar]"}</Link>
                    </div>
                </div>
            </div>
            <div id="posts">
                {posts.map((post, index) => {
                    return (
                        <div className={classNames("post", { important: post.isImportant })} key={index}>
                            <div className="id">{post.id}</div>
                            <div className="dates">
                                {dayjs(post.beginDate).format("YYYY/MM/DD")} - {post.endDate ? dayjs(post.endDate).format("YYYY/MM/DD") : null}
                            </div>
                            <div className="info">
                                [{post.category}] {post.description}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
