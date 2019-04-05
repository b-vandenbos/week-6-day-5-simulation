import {createStore} from 'redux';


let initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    img: '',
    mortgage: '',
    rent: ''
};

export const STEP_ONE = 'STEP_ONE';
export const STEP_TWO = 'STEP_TWO';
export const STEP_THREE = 'STEP_THREE';
export const CANCEL = 'CANCEL';

function reducer(state = initialState, action) {
    switch (action.type) {
        case STEP_ONE:
            return ({...state, name: action.payload.name, address: action.payload.address, city: action.payload.city, state: action.payload.state, zip: action.payload.zip});
        case STEP_TWO:
            return ({...state, img: action.payload});
        case STEP_THREE:
            return ({...state, mortgage: action.payload.mortgage, rent: action.payload.rent});
        case CANCEL:
            return ({...state, name: '', address: '', city: '', state: '', zip: '', img: '', mortgage: '', rent: ''});
        default:
            return state;
    }
}

export default createStore(reducer);

