import Image from "next/image";
import avatar from '../../public/avatar.webp'

export const AvatarHeading = (param: {
    title?: string,
}) => {
    return (
        <h1 className="text-2xl font-light">
            <Image
                src={avatar}
                alt="Avatar"
                className="w-[1.3em] h-[1.3em] rounded-full inline-block align-[-20%] mr-3"
            />
            <span className="text-accent">
                <span className="mr-1">{param.title ? (param.title) : ("Hello 👋")}</span>
            </span>
        </h1>
    )
}
