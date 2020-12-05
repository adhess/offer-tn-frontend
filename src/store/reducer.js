const initialState = {
    async_counter: 0,
    is_show_category: false
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
        case 'TOGGLE_SHOW_CATEGORY':
            return {
                ...state,
                is_show_category: !state.is_show_category
            }
        default:
            return state;
    }
}

export default reducer;