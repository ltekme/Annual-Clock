export const Divider = (param: {
    width: string
}) => {
    return (<hr className={`w-[${param.width}] h-0 border-text-3 mt-3 mb-3`} />)
}