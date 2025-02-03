import { Avatar } from '@ark-ui/react'

export const AvatarName = ({ avatar, displayName }: { avatar: string; displayName: string }) => {
    console.log(avatar)
    return (
        <div className="relative mt-[-3rem] flex flex-col items-center gap-1 rounded-lg">
            <img
                className="md:24 w-16 rounded-full shadow-lg shadow-white outline outline-white"
                src={avatar}
                alt={`${displayName}-bluesky-profile-picture`}
            />
            <p className="text-xl drop-shadow-[0_3px_1.2px_rgba(255,255,255,0.8)] md:text-2xl">
                {displayName}
            </p>
        </div>
    )
}
