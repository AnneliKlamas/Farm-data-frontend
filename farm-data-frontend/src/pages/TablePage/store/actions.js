import {FETCH_FARM_DATA} from "@/pages/TablePage/store/action-types";
import Api from "@/pages/TablePage/store/api"

export const actions = {
    async [FETCH_FARM_DATA]({commit}) {
        let farmData = await Api.fetchFarmData()
        commit([], farmData)
    }
}