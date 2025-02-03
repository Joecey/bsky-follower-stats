import { AvatarName } from './AvatarName'

type ProfileBannerProps = {
    displayName: string
    avatar: string
    banner?: string
}

export const ProfileBanner = ({ displayName, avatar, banner }: ProfileBannerProps) => (
    <div
        id="profile-banner-wrapper"
        className="mb-8 mt-8 flex flex-col items-center justify-center"
    >
        <div id="image-wrapper" className="relative inline-block">
            <img className="h-32 rounded-3xl object-cover px-2 blur-lg md:h-48" src={banner} />
            <img
                className="absolute left-0 top-0 h-32 rounded-3xl object-cover px-2 md:h-48"
                src={banner}
            />
        </div>
        <AvatarName avatar={avatar} displayName={displayName} />
    </div>
)
