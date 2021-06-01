
const initialState = {
    lange: 'ru',
    sideBar: false,
};

export const mainReducer = (state = initialState, action)=>{
    switch(action.type){
        case 'INITIAL-LANGE': 
            return{
                ...state,
                lange: action.payload
            };
        case 'RU-LANGE':
            return {
                ...state,
                lange: 'ru'
            };
        case 'EN-LANGE':
            return {
                ...state,
                lange: 'en'
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