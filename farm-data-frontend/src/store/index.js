import Vuex from "vuex";

import table from "@/pages/TablePage/store"

const createStore = () => {
    return new Vuex.Store({
        modules: {
            table: table
        }
    });
};

export default createStore;