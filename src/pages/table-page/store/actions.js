import {FETCH_FARM_DATA, UPLOAD_FARM_DATA, DELETE_ALL_DATA} from "./action-types"
import Api from "./api"
import {SET_FARM_DATA} from "./mutation-types";

export const actions = {
    async [FETCH_FARM_DATA]({ commit }) {
        let farmData = await Api.fetchFarmData()
        commit(SET_FARM_DATA, farmData.data)
    },

    async [UPLOAD_FARM_DATA]({dispatch}, file) {
        const formData = new FormData();
        formData.append("file", file);
        await Api.uploadFarmData(formData)
        dispatch(FETCH_FARM_DATA)
    },

    [DELETE_ALL_DATA]({dispatch}) {
        Api.deleteAllData().then(()=> dispatch(FETCH_FARM_DATA))
    },
}