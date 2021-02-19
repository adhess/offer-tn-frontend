const initialState = {
    async_counter: 0,
    is_show_category: false,
    is_drawer_open: false,
    activeFilter: {
        checked_specs: [],
        price_range: []
    }
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
        case 'TOGGLE_SHOW_CATEGORY':
            return {
                ...state,
                is_show_category: !state.is_show_category
            }
        case 'TOGGLE_DRAWER':
            return {
                ...state,
                is_drawer_open: !state.is_drawer_open
            }
        default:
            return state;
    }
}

export default reducer;