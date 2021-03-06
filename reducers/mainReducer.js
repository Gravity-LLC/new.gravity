
const initialState = {
    lange: 'ru',
    sideBar: false,
};

export const mainReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'INITIAL-LANGE': 
            return{
                ...state,
                lange: action.payload || 'ru',
                sideBar: false,
            };
        case 'RU-LANGE':
            return {
                ...state,
                lange: 'ru',
                sideBar: false,
            };
        case 'EN-LANGE':
            return {
                ...state,
                lange: 'en',
                sideBar: false,
            };
        case 'SIDE-BAAR-TRUE':
            return {
                ...state,
                sideBar: true
            }
        case 'SIDE-BAAR-FALSE':
            return {
                ...state,
                sideBar: false
            }
        default: return state;
    }
}