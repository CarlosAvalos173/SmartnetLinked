export const state = () => ({
    data:[]
})

export const mutations = {
    storeAddresses:(state,data) =>{
        state.data = data
    }
}
