import { AvatarName } from './AvatarName'
import placeholderBanner from '@assets/placeholder-banner.webp'

type ProfileBannerProps = {
    displayName: string
    avatar: string
    banner?: string
    id?: string
}

export const ProfileBanner = ({ displayName, avatar, banner, id }: ProfileBannerProps) => {
    return (
        <div
            id="profile-banner-wrapper"
            className="mb-4 mt-8 flex flex-col items-center justify-center"
        >
            <div id="image-wrapper" className="relative inline-block">
                <img
                    className="h-32 rounded-3xl object-cover px-2 blur-lg md:h-48"
                    src={banner ?? placeholderBanner.src}
                />
                <img
                    className="absolute left-0 top-0 h-32 rounded-3xl object-cover px-2 md:h-48"
                    src={banner ?? placeholderBanner.src}
                />
            </div>
            <AvatarName
                avatar={avatar}
                displayName={displayName.length !== 0 ? displayName : id ? id : ''}
            />
        </div>
    )
}
