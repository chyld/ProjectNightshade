import Link from "next/link";
import { getAllPosts } from "@/lib/queries";
import dayjs from "dayjs";
import classNames from "classnames";
import styles from "./page.module.css";

export default async function List() {
    const posts = await getAllPosts();

    return (
        <div>
            <div id={styles.header}>
                <div id={styles.title}>The List</div>
                <div id={styles.nav}>
                    <div>
                        <Link href={`/new`}>{"[New]"}</Link>
                    </div>
                    <div>
                        <Link href={`/calendar`}>{"[Calendar]"}</Link>
                    </div>
                </div>
            </div>
            <div id={styles.posts}>
                {posts.map((post, index) => {
                    return (
                        <div className={classNames(styles.post, { [styles.important]: post.isImportant })} key={index}>
                            <div>{post.id}</div>
                            <div>
                                {dayjs(post.beginDate).format("YYYY/MM/DD")} - {post.endDate ? dayjs(post.endDate).format("YYYY/MM/DD") : null}
                            </div>
                            <div>
                                [{post.category}] <span style={{ backgroundColor: post.color }}>[{post.color}]</span> {post.description}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
