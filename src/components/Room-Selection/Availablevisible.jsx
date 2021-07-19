const Availablevisible = () => {
    return (
        <div className="flex flex-row space-x-4 items-center content-center justify-center md:pt-10 md:pl-10 w-11/12 md:w-1/2">
            <div className="border border-magenta bg-white border-solid h-3 w-3"></div>
            <p className="text-xs md:text-sm">Available</p>
            <div className="border border bg-gray-400 border-solid h-3 w-3"></div>
            <p className="text-xs md:text-sm">Not Available</p>
            <div className="border border-magenta bg-magenta border-solid h-3 w-3"></div>
            <p className="text-xs md:text-sm">Selected</p>
        </div>
    )
}

export default Availablevisible