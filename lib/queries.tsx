import { PrismaClient } from "@prisma/client";
import { Dayjs } from "dayjs";

const prisma = new PrismaClient({
    log: [
        {
            emit: "event",
            level: "query",
        },
        "info",
        "warn",
        "error",
    ],
});

prisma.$on("query", (e) => {
    console.log("Query:", e);
});

export async function getPosts(theDate: Dayjs) {
    const startOfMonth = theDate.startOf("month").toDate();
    const endOfMonth = theDate.endOf("month").toDate();

    const results = await prisma.post.findMany({
        where: {
            OR: [
                {
                    beginDate: {
                        gte: startOfMonth,
                        lte: endOfMonth,
                    },
                },
                {
                    endDate: {
                        gte: startOfMonth,
                        lte: endOfMonth,
                    },
                },
                {
                    AND: [
                        {
                            beginDate: {
                                lt: startOfMonth,
                            },
                        },
                        {
                            endDate: {
                                gt: endOfMonth,
                            },
                        },
                    ],
                },
            ],
        },
    });

    return results;
}
