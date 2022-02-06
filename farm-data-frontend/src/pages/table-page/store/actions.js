import {FETCH_FARM_DATA} from "./action-types"
import Api from "./api"
import {SET_FARM_DATA} from "./mutation-types";

export const actions = {
    async [FETCH_FARM_DATA]({commit}) {
        let farmData = await Api.fetchFarmData()
        console.log("farm data 1" + farmData)
        commit(SET_FARM_DATA, farmData.data)
    }
}