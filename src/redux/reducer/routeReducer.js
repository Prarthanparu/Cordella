import * as actionType from '../actionTypes/routeActionType';

export default (state = {}, action) => {
    switch(action.type){
        case actionType.GET_ROUTES :
            return {
                ...state,
                routeData : action.payload
            };
    }
    return state;
}

