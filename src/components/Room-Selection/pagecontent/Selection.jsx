const Selection = ({ toggleButton, selection }) => {
    return (
        <div className="grid grid-cols-5 gap-1 pb-14 ">

            <div className="h-8 w-14"></div>
            <div className="h-8 w-14"></div>
            <div className="h-8 w-14"></div>
            <button onClick={() => toggleButton(0)} className={`border rounded border-magenta ${selection[0] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9052 </button>
            <div className="h-8 w-14"></div>

            <div className="h-8 w-14"></div>
            <div className="h-8 w-14"></div>
            <div className="h-8 w-14"></div>
            <button onClick={() => toggleButton(1)} className={`border rounded border-magenta ${selection[1] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9053 </button>
            <div className="h-8 w-14"></div>

            <div className="h-8 w-14"></div>
            <div className="h-8 w-14"></div>
            <div className="h-8 w-14"></div>
            <button onClick={() => toggleButton(2)} className={`border rounded border-magenta ${selection[2] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9054 </button>
            <div className="h-8 w-14"></div>

            <div className="h-8 w-14"></div>
            <div className="h-8 w-14"></div>
            <div className="h-8 w-14"></div>
            <button onClick={() => toggleButton(3)} className={`border rounded border-magenta ${selection[3] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9055 </button>
            <div className="h-8 w-14"></div>

            <button onClick={() => toggleButton(4)} className={`border rounded border-magenta ${selection[4] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9056 </button>
            <button onClick={() => toggleButton(5)} className={`border rounded border-magenta ${selection[5] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9057 </button>
            <div className="h-8 w-14"></div>
            <button onClick={() => toggleButton(6)} className={`border rounded border-magenta ${selection[6] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9058 </button>
            <button className="border rounded border-black bg-gray-400 text-white h-8 w-14 text-sm"> 9059 </button>

            <button onClick={() => toggleButton(7)} className={`border rounded border-magenta ${selection[7] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9060 </button>
            <button onClick={() => toggleButton(8)} className={`border rounded border-magenta ${selection[8] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9061 </button>
            <div className="h-8 w-14"></div>
            <button className="border rounded border bg-magenta text-white h-8 w-14 text-sm"> 9062 </button>
            <button className="border rounded border-black bg-gray-400 text-white h-8 w-14 text-sm"> 9063 </button>

            <button onClick={() => toggleButton(9)} className={`border rounded border-magenta ${selection[9] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9064 </button>
            <button onClick={() => toggleButton(10)} className={`border rounded border-magenta ${selection[10] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9065 </button>
            <div className="h-8 w-14"></div>
            <button onClick={() => toggleButton(11)} className={`border rounded border-magenta ${selection[11] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9066 </button>
            <button className="border rounded border-black bg-gray-400 text-white h-8 w-14 text-sm"> 9067 </button>

            <button onClick={() => toggleButton(12)} className={`border rounded border-magenta ${selection[12] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9068 </button>
            <button onClick={() => toggleButton(13)} className={`border rounded border-magenta ${selection[13] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9069 </button>
            <div className="h-8 w-14"></div>
            <button onClick={() => toggleButton(14)} className={`border rounded border-magenta ${selection[14] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9070 </button>
            <button className="border rounded border-black bg-gray-400 text-white h-8 w-14 text-sm"> 9071 </button>

            <button onClick={() => toggleButton(15)} className={`border rounded border-magenta ${selection[15] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9072 </button>
            <button className="border rounded border-black text-white bg-gray-400 h-8 w-14 text-sm"> 9073 </button>
            <div className="h-8 w-14"></div>
            <button onClick={() => toggleButton(16)} className={`border rounded border-magenta ${selection[16] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9074 </button>
            <button className="border rounded border-black bg-gray-400 text-white h-8 w-14 text-sm"> 9075 </button>


            <button onClick={() => toggleButton(17)} className={`border rounded border-magenta ${selection[17] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9076 </button>
            <button className="border rounded border-black text-white bg-gray-400 h-8 w-14 text-sm"> 9077 </button>
            <div className="h-8 w-14"></div>
            <button className="border rounded border-black text-white bg-gray-400 h-8 w-14 text-sm"> 9078 </button>
            <button onClick={() => toggleButton(18)} className={`border rounded border-magenta ${selection[18] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9079 </button>

            <button onClick={() => toggleButton(19)} className={`border rounded border-magenta ${selection[19] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9080 </button>
            <button className="border rounded border-black text-white bg-gray-400 h-8 w-14 text-sm"> 9081 </button>
            <div className="h-8 w-14"></div>
            <button onClick={() => toggleButton(20)} className={`border rounded border-magenta ${selection[20] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9082 </button>
            <button onClick={() => toggleButton(21)} className={`border rounded border-magenta ${selection[21] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9083 </button>

            <button onClick={() => toggleButton(22)} className={`border rounded border-magenta ${selection[22] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9084 </button>
            <button onClick={() => toggleButton(23)} className={`border rounded border-magenta ${selection[23] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9085 </button>
            <div className="h-8 w-14"></div>
            <button onClick={() => toggleButton(24)} className={`border rounded border-magenta ${selection[24] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9086 </button>
            <button onClick={() => toggleButton(25)} className={`border rounded border-magenta ${selection[25] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9087 </button>

            <button onClick={() => toggleButton(26)} className={`border rounded border-magenta ${selection[26] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9088 </button>
            <button onClick={() => toggleButton(27)} className={`border rounded border-magenta ${selection[27] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9089 </button>
            <div className="h-8 w-14"></div>
            <button onClick={() => toggleButton(28)} className={`border rounded border-magenta ${selection[28] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9090 </button>
            <button onClick={() => toggleButton(29)} className={`border rounded border-magenta ${selection[29] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9091 </button>

            <button onClick={() => toggleButton(30)} className={`border rounded border-magenta ${selection[30] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9092 </button>
            <button onClick={() => toggleButton(31)} className={`border rounded border-magenta ${selection[31] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9093 </button>
            <div className="h-8 w-14"></div>
            <button onClick={() => toggleButton(32)} className={`border rounded border-magenta ${selection[32] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9094 </button>
            <button onClick={() => toggleButton(33)} className={`border rounded border-magenta ${selection[33] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9095 </button>

            <div className="h-8 w-14"></div>
            <button onClick={() => toggleButton(34)} className={`border rounded border-magenta ${selection[34] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9096 </button>
            <button onClick={() => toggleButton(35)} className={`border rounded border-magenta ${selection[35] ? `bg-white text-magenta` : `bg-magenta text-white`} h-8 w-14 text-sm`}> 9097 </button>
            <div className="h-8 w-14"></div>
            <div className="h-8 w-14"></div>
        </div>
    )
}

export default Selection
