export const itemsCounterHandler = (array) => {

    let count = 0

    array.map(item => {
        count += item.amount
    })

    return count
}

