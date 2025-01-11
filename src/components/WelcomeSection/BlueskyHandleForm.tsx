import { Field } from '@ark-ui/react/field'
import { useState } from 'react'

export const BlueskyHandleForm = () => {
    const [username, setUserName] = useState('')

    return (
        <div id="useranme-form" className="w-full">
            <Field.Root className="flex flex-col">
                <Field.Label className="py-1 text-xl">
                    Enter your @bluesky handle to learn more about your followers!
                </Field.Label>
                <Field.Input className="text-2xl" />
                <Field.HelperText className="text-sm text-gray-600">
                    Make sure that you have a valid bluesky handle!
                </Field.HelperText>
                <Field.ErrorText>Error Info</Field.ErrorText>
            </Field.Root>

            {username && <p>Welcome {username}</p>}
        </div>
    )
}
