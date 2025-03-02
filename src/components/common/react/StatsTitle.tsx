import { Tooltip } from '@ark-ui/react/tooltip'

type Props = {
    displayTitle: string
    tooltip?: string
}

export const StatsTitle = ({ displayTitle, tooltip }: Props) => {
    if (!tooltip) return <h1 className="mb-2 text-left text-lg">{displayTitle}</h1>

    return (
        <Tooltip.Root closeDelay={0} openDelay={0}>
            <Tooltip.Trigger disabled>
                <h1 className="mb-2 text-left text-base md:text-lg">{displayTitle} &#9432;</h1>
            </Tooltip.Trigger>
            <Tooltip.Positioner>
                <Tooltip.Content className="motion-preset-focus z-50 mt-[-1rem] max-w-60 rounded-lg bg-white p-2 motion-duration-300">
                    {tooltip}
                </Tooltip.Content>
            </Tooltip.Positioner>
        </Tooltip.Root>
    )
}
