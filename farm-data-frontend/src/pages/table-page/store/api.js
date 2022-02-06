import { Backend } from "@/axos-config"

export default {
    fetchFarmData() { return Backend.get('/farm-data')}
}