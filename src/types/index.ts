export interface Item {
    id: number,
    date: string,
    data: {
        english: {
            timeSpent: number,
        },
        IT: {
            timeSpent: number,
        },
    },
}
