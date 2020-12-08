const initialState = {
    async_counter: 0,
    activeFilter: {}
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ASYNC_ACTION':
            return {
                ...state,
                async_counter: state.async_counter + 1
            }
        case 'SUB_ASYNC_ACTION':
            return {
                ...state,
                async_counter: state.async_counter - 1
            }
        case 'UPDATE_FILTER':
            return {
                ...state,
                activeFilter: action.newFilter
            }
        default:
            return state;
    }
}

export default reducer;