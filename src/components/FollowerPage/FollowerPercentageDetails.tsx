export const FollowerPercentageDetails = ({
    id,
    followerPercentageAsArray,
    totalUsers,
}: {
    id: string | undefined
    followerPercentageAsArray: string[]
    totalUsers: number
}) => {
    return (
        <div className="flex w-fit max-w-full flex-col items-center justify-center gap-4 p-2">
            {id && (
                <p className="text-base sm:text-xl">
                    <a
                        className="text-sky-600 hover:underline"
                        href={`https://bsky.app/profile/${id}`}
                        target="_blank"
                    >
                        @{id}
                    </a>
                    , out of <span className="underline">{totalUsers}</span> users on Bluesky...
                </p>
            )}
            <div id="percentage-display" className="flex max-w-full gap-2 md:gap-4">
                {followerPercentageAsArray.map((char, index) => (
                    <h1
                        key={index}
                        className="motion-delay-300 motion-preset-slide-up flex aspect-video w-full max-w-5xl flex-col items-center justify-center gap-4 rounded-lg bg-sky-300/20 p-1 text-2xl sm:p-2 sm:text-5xl"
                    >
                        {char}
                    </h1>
                ))}
            </div>
            <p className="motion-delay-500 motion-preset-slide-up text-base sm:text-xl">
                ...are following you!
            </p>
        </div>
    )
}
