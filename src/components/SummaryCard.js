import moment from 'moment'

const SummaryCard = ({day}) => {
    let day_icon = `${process.env.REACT_APP_ICON_URL + day.weather[0]["icon"]}@2x.png`
    return (
        <li className="container p-4 lg:flex lg:items-center lg:justify-center bg-gray-200 rounded-lg my-auto mr-1">
            <div className="my-auto">
                <p className="font-bold text-3xl text-purple-400 mb-2">
                    {Math.round(day.main.temp)}&deg;C
                </p>
                <p className="text-2xl text-gray-800 tracking-widest">
                    {day.weather[0].main}
                    <img src={day_icon} className="w-1/4 inline" />
                </p>
                <p className="text-gray-400 text-xs uppercase tracking-widest">
                    {day.weather[0].description}
                </p>
                <p className="tracking-wider">
                    {moment(day.dt_txt).format("dddd DD MMM hh:mm")}am
                </p>
            </div>
        </li>
    )
}

export default SummaryCard