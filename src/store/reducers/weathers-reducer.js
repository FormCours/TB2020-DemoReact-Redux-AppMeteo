const { ADD_WEATHER, REMOVE_WEATHER } = require("../actions/weathers-action");


const initialState = {
    data : []
};


const weathersReducer = (state = initialState, action) => {
        switch (action.type) {
            case ADD_WEATHER:
                const weather = action.payload;
                const weathers = state.data;
                if(weathers.find(w => w.id === weather.id)) {
                    return {
                        data: weathers.map(w => w.id === weather.id ? weather : w)
                    }
                }
                return {
                    data: [...weathers, weather]
                }
            case REMOVE_WEATHER: 
                const id = action.payload;
                return {
                    data: state.data.filter(w => w.id !== id)
                }
            default:
                return state;
        }
}

export default weathersReducer