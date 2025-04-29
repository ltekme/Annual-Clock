import { ReactNode } from "react"

export const Center = ({ children }: {
    children: ReactNode
}) => {
    return (
        <div className="flex flex-row min-h-screen justify-center items-center">
            {children}
        </div>
    )
}