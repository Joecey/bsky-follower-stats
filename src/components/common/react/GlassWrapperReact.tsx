import { type ReactNode } from 'react'

export default function GlassWrapperReact({ children }: { children: ReactNode }) {
    return (
        <div className="w-full max-w-3xl rounded-xl bg-sky-200/30 px-2 py-4 shadow-md md:px-4">
            {children}
        </div>
    )
}
