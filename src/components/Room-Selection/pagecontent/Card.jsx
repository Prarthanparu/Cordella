import User from "../../../assets/img/room-selection/user.png"
import Dinner from "../../../assets/img/room-selection/dinner.png"
import Ruler from "../../../assets/img/room-selection/ruler.png"
import Confetti from "../../../assets/img/room-selection/confetti.png"

const Card = () => {
    return (
        <>
            <h5 className="text-2xl font-bold mb-4 mt-0">INTERIOR</h5>
            <div className="grid grid-cols-2 flex flex-column space-x-4 mt-2">
                <img className="w-11/12" src="https://picsum.photos/id/1001/200/120" />
                <img className="w-11/12" src="https://picsum.photos/id/1000/200/120" />
            </div>
            <p className="text-gray-700 text-xs mt-3">Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Amet Minim Mollit Non Deserunt Ullamco Est Sit Aaliqua Dolor.</p>

            <div className="auto-cols-max mt-5 flex flex-row">
                <div className="grid-cols-1 w-1/2">

                    <h2 className="text-xs font-bold flex flex-col">ROOM FEATURE</h2>
                    <div className="flex flex-row items-center mt-2">
                        <img className="w-2.5 h-2.5 mr-2" src={User} />
                        <p className="text-xs">Accommodates Up To 4 Guests</p>
                    </div>
                    <div className="flex flex-row items-center mt-2">
                        <img className="w-2.5 h-2.5 mr-2" src={Ruler} />
                        <p className="text-xs">Room Size - 139 SQ.FT</p>
                    </div>
                </div>

                <div className="grid-cols-1 w-1/2 ml-3">
                    <h2 className="text-xs font-bold">INCLUSIONS</h2>
                    <div className="flex flex-row items-center mt-2">
                        <img className="w-2.5 h-2.5 mr-2" src={User} />
                        <p className="text-xs">Accommodation</p>
                    </div>
                    <div className="flex flex-row items-center mt-2">
                        <img className="w-2.5 h-2.5 mr-2" src={Dinner} />
                        <p className="text-xs">All Meals</p>
                    </div>
                    <div className="flex flex-row items-center mt-2">
                        <img className="w-2.5 h-2.5 mr-2" src={Confetti} />
                        <p className="text-xs">Entertainment</p>
                    </div>
                    <div className="flex flex-row items-center mt-2">
                        <img className="w-2.5 h-2.5 mr-2" src={User} />
                        <p className="text-xs">Access To All Public Areas</p>
                    </div>
                </div>
            </div>

            <div className="h-px bg-black mt-5"></div>

            <div className="auto-cols-max mt-5 flex flex-row">
                <div className="grid-cols-1 w-1/2">
                    <h2 className="text-xs font-bold flex flex-col">Cabin 1</h2>
                    <div className="flex flex-row items-center mt-2">
                        <p className="text-xs">Guest: 2</p>
                    </div>
                    <div className="flex flex-row items-center mt-2">
                        <p className="text-xs">Room Type: </p><p className="ml-2 text-xs font-bold">INTERIOR</p>
                    </div>
                    <div className="flex flex-row items-center mt-2">
                        <p className="text-xs">Selected Room Number:  <b>9062</b> </p>
                    </div>
                </div>

                <div className="grid-cols-1 w-1/2">
                    <h2 className="text-xs font-bold flex flex-col">Cabin 2</h2>
                    <div className="flex flex-row items-center mt-2">
                        <p className="text-xs">Guest: 1</p>
                    </div>
                    <div className="flex flex-row items-center mt-2">
                        <p className="text-xs">Room Type: </p><p className="ml-2 text-xs font-bold">INTERIOR</p>
                    </div>
                    <div className="flex flex-row items-center mt-2">
                        <p className="text-xs">Selected Room Number:  <b>9064</b> </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
