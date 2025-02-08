// * This is for server side posthog usage *//

import { PostHog } from 'posthog-node'

export const PostHogClient = () => {
    const posthogClient = new PostHog(import.meta.env.SECRET_POSTHOG_KEY, {
        host: import.meta.env.SECRET_POSTHOG_HOST,
    })

    return posthogClient
}
