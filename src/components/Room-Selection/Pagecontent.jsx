import Selection from "./pagecontent/Selection"
import Card from "./pagecontent/Card"

const Pagecontent = ({ toggleButton, selection }) => {
    return (
        <div className="">
            <div className="justify-items-center grid lg:grid-cols-2 md:grid-cols-1 md:grid-cols-1 mt-8 p-4 md:p-8  flex flex-row lg:space-x-10 sm:space-x-0 w-full">
                <div className="mr-2 md:mr-0 md:ml-0 bg-white shadow border rounded-b-full border-t-0 border-black p-2 md:px-16 2xl:w-6/12 xl:w-9/12 lg:w-11/12 md:w-8/12 w-max">
                    <Selection toggleButton={toggleButton} selection={selection} />
                </div>

                <div className="bg-white rounded shadow p-6 md:w-9/12 sm:w-full">
                    <Card />
                </div>
            </div>
            <div className="p-10 flex items-center content-center justify-center">
                <button className="bg-red-400 text-xs text-white rounded h-8 w-28">View Summary</button>
            </div>
        </div>
    )
}

export default Pagecontent
