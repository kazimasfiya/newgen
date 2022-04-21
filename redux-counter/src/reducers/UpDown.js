import { DECREMENT, INCREMENT } from "../constants/Index";

const initialState = 0;

const changeCount = (state = initialState, action) => {
   console.log(action)
    switch (action.type) {
        case INCREMENT:
            return state + action.payload;

            break;

        case DECREMENT:
            return state - action.payload;

            break;

        default:
            return state;
            break;
    }
}

export default changeCount;
