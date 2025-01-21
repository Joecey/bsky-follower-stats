export const getFollowerPercentageAsCharArray = ({
    userFollowers,
    totalUsers,
}: {
    userFollowers: number
    totalUsers: number
}): string[] => {
    const maxArraySize = 10
    const percentage = ((userFollowers / totalUsers) * 100).toString()
    const percentageDisplayArray = percentage.split('', maxArraySize)
    percentageDisplayArray.push('%')
    return percentageDisplayArray
}
