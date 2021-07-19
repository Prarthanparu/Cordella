import React from 'react';

const Search=(props)=> {
    return (
        <div className="m-3">
        <div className="max-w-screen-lg mx-auto bg-white shadow-2xl relative -top-15">
            <div className="grid grid-flow-rows md:grid-flow-col md:grid-row-1 items-center divide-x divide-gray">
                <div className="p-2 px-6 ">
                    <p className="text-j-gray mb-0">Sailing to</p>
                    <p className="mb-0"><i class="fas fa-map-marker-alt mr-3"></i>Kerala</p>
                </div>
                <div className="p-2 px-6">
                    <p className="text-j-gray mb-0">Sailing from</p>
                    <p className="mb-0"><i class="fas fa-map-marker-alt mr-3"></i>Mumbai</p>
                </div>
                <div className="p-2 px-6">
                    <p className="text-j-gray mb-0">Month of Sail</p>
                    <p className="mb-0"><i class="far fa-calendar mr-3"></i>January 2022</p>
                </div>
                <p className="p-7 mb-0 text-center text-white bg-j-orange cursor-pointer">CLEAR ALL</p>
                
            </div>
            
        </div>
        </div>
    );
}

export default Search;