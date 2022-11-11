import dayjs from "dayjs";

export function getMonth(month = dayjs().month()) {
    const year = dayjs().year();
    const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
    let currentDayOfTheMonth = 0 - firstDayOfTheMonth;

    const daysMatrix = new Array(5).fill([]).map(() => {
        return new Array(7).fill(null).map(() => {
            return dayjs(new Date(year, month, ++currentDayOfTheMonth));
        })
    })
    return daysMatrix;
}