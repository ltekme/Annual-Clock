export const TimeDisplay = (param: {
    time: Date
}) => {
    const formatTimeString = (value: number) => {
        return value.toString().padStart(2, '0')
    }

    const currentDate = param.time.toDateString();
    const currentHour = formatTimeString(param.time.getHours());
    const currentMinute = formatTimeString(param.time.getMinutes());
    const currentSeconds = formatTimeString(param.time.getSeconds());

    return (<table className="text-text text-lg">
        <tbody>
            <tr>
                <td className="pr-2">Today is</td>
                <td className="text-accent">{currentDate}</td>
            </tr>
            <tr>
                <td></td>
                <td className="text-accent">{currentHour}:{currentMinute}:{currentSeconds}</td>
            </tr>
        </tbody>
    </table >)
}

export const Progress = (param: {
    time: Date
}) => {
    const year = param.time.getFullYear();
    const day1: Date = new Date(Date.UTC(year, 0, 1));
    const difference = Math.abs(day1.getTime() - param.time.getTime());
    const persentage = (difference / 1e3 / 60 / 60 / 24 / 365) * 100;

    return (<div className="mt-4">
        <div className="border-[3px] border-text relative h-[30px] w-[350px] mb-2">
            <div style={{ width: persentage + '%' }} className={`bg-accent h-full`}></div>
        </div>
        <span className="text-text text-lg">{year} is <span className="text-accent">{persentage.toFixed(2)}%</span> completed</span>
    </div>)
}
