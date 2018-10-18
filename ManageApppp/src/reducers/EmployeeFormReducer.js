import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEES_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

//sectiunea 17 lectia 143 de repetat
export  default (state= INITIAL_STATE, actions) => {
    switch(actions.type){
        case EMPLOYEE_UPDATE:
            return { ...state, [actions.payload.prop] : actions.payload.value};
        case EMPLOYEE_CREATE:
            return INITIAL_STATE;
        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    };
};