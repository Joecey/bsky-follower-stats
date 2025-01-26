import { Field } from '@ark-ui/react/field'
import { useState } from 'react'
import trim from 'lodash/trim'
import toLower from 'lodash/toLower'

export const BlueskyHandleForm = () => {
    const defaultUserName = ''
    const [username, setUserName] = useState(defaultUserName)
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    const handleInputField = (e: React.ChangeEvent<HTMLInputElement>) => {
        setButtonDisabled(
            toLower(trim(e.target.value).replace(/@/g, '')).length === 0 ? true : false
        )
        setUserName(`${toLower(trim(e.target.value).replace(/@/g, ''))}`)
    }

    return (
        <form id="useranme-form" className="w-full">
            <Field.Root className="flex flex-col">
                <Field.Label className="py-1 text-lg">
                    Enter your @bluesky handle to learn more about your followers!
                </Field.Label>
                <Field.Input
                    className={`rounded-md p-1 text-2xl shadow-sm ${username.replace('@', '') === '' ? 'text-gray-400' : 'text-black'} transition-colors`}
                    onChange={handleInputField}
                    value={username ? `@${username}` : '@'}
                />
                <Field.HelperText className="text-sm text-gray-600">
                    Make sure that you have a valid bluesky handle!
                </Field.HelperText>
            </Field.Root>
            <button
                className="mt-4 rounded-full bg-sky-500 px-4 py-2 text-base text-white transition-colors hover:bg-sky-700 disabled:cursor-not-allowed disabled:bg-gray-400"
                disabled={buttonDisabled}
                onClick={() => {
                    setIsLoading(true)
                    setButtonDisabled(true)
                    window.location.href = `/followers/${username}`
                }}
                type="submit"
                form="useranme-form"
            >
                {isLoading ? 'Searching...' : 'Search my followers!'}
            </button>
        </form>
    )
}
