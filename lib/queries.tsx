import { PrismaClient } from "@prisma/client";
import { Dayjs } from "dayjs";

const prisma = new PrismaClient();

export async function getPosts(urlDate: Dayjs) {
    const startOfMonth = urlDate.startOf("month").toDate();
    const endOfMonth = urlDate.endOf("month").toDate();

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
