import { Backend } from "@/axios-config"

export default {
    fetchFarmData() { return Backend.get('/farm-data')},
    uploadFarmData(file) { return Backend.post('/farm-data/upload', file)}
}