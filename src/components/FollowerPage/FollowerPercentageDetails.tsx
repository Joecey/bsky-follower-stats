import { twMerge } from 'tailwind-merge'
import { tailwindDelays } from '@utils/tailwindDelays'

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
        <div className="flex w-full flex-col items-center justify-center gap-4">
            {id && (
                <p className="text-center text-base sm:text-lg">
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
                {followerPercentageAsArray.map((char, index) => {
                    const motionDelay = tailwindDelays[index]
                    const charClassName = twMerge(
                        motionDelay,
                        'motion-preset-slide-up flex aspect-video w-full max-w-3xl flex-col items-center justify-center gap-4 rounded-lg bg-sky-300/20 p-1 text-2xl sm:p-2 sm:text-4xl'
                    )
                    return (
                        <h1 key={index} className={charClassName}>
                            {char}
                        </h1>
                    )
                })}
            </div>
            <p className="motion-preset-slide-up text-base motion-delay-500 sm:text-lg">
                ...are following you!
            </p>
        </div>
    )
}
