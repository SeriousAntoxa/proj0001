import data from "./../data/data.json"
import config from "./../data/config.json"

export const dataAPI = {
    getData() {
        return data
    },
    getConfig() {
        return config
    },
}
