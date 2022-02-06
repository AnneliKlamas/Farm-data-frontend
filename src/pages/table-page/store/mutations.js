import {SET_FARM_DATA} from "./mutation-types";

export const mutations = {
    [SET_FARM_DATA](state, farmData) {
        state.farmData = farmData
    }
}