export const state = () => ({
    id:0,
    provider:"",
    amount:0.0
})

export const mutations = {
    storeId:(state,data) =>{
        state.id = data
    },
    storeProvider:(state,data) =>{
        state.provider = data
    },
    storeAmount:(state,data) =>{
        state.amount = data
    },
}