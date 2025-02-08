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
            className="mt-4 flex w-full flex-col items-center justify-center"
        >
            <div id="image-wrapper" className="relative h-28 w-full">
                <img
                    className="absolute inset-0 h-full w-full rounded-xl object-cover shadow-md"
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
