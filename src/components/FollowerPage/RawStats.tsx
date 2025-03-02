import GlassWrapperReact from '@components/common/react/GlassWrapperReact'

type Props = {
    userFollowers: number
    followsCount: number
    postsCount: number
    createdAt: Date
}

export const RawStats = ({ userFollowers, followsCount, postsCount, createdAt }: Props) => {
    const todaysDate = new Date()
    const dayDifference = Math.floor(
        (todaysDate.getTime() - createdAt.getTime()) / (1000 * 3600 * 24)
    )

    return (
        <div className="flex w-full flex-col justify-center gap-2">
            <div className="flex flex-col gap-2 min-[412px]:flex-row">
                <GlassWrapperReact>
                    <h3 className="w-full text-center text-2xl sm:text-4xl">{`${userFollowers}`}</h3>
                    <p className="w-full text-center text-base sm:text-xl">Followers</p>
                </GlassWrapperReact>
                <GlassWrapperReact>
                    <h3 className="w-full text-center text-2xl sm:text-4xl">{` ${followsCount}`}</h3>
                    <p className="w-full text-center text-base sm:text-xl">Follows</p>
                </GlassWrapperReact>
                <GlassWrapperReact>
                    <h3 className="w-full text-center text-2xl sm:text-4xl">{`${postsCount}`}</h3>
                    <p className="w-full text-center text-base sm:text-xl">Total Posts</p>
                </GlassWrapperReact>
            </div>
            <div className="flex flex-col gap-2 min-[412px]:flex-row">
                <GlassWrapperReact>
                    <p className="w-full text-center text-sm sm:text-base">
                        Starting from {' '}
                        <span className="text-sky-500">
                            {createdAt.toLocaleDateString(undefined, {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </span>
                        , you have posted an average of...
                    </p>
                    <h3 className="mt-2 w-full text-center text-2xl sm:text-4xl">
                        {`${(postsCount / dayDifference).toFixed(2)}`}
                        <span className="ml-2 text-base sm:text-lg">posts / day </span>
                    </h3>
                </GlassWrapperReact>
                <GlassWrapperReact>
                    <div className="flex h-full w-full flex-col justify-center">
                        <p className="w-full text-center text-sm sm:text-base">
                            Your influence has you growing at an average of...
                        </p>
                        <h3 className="mt-2 w-full text-center text-2xl sm:text-4xl">
                            {`${(userFollowers / postsCount).toFixed(2)}`}
                            <span className="ml-2 text-base sm:text-lg">followers / day </span>
                        </h3>
                    </div>
                </GlassWrapperReact>
            </div>
        </div>
    )
}
