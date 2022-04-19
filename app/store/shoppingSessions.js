export const state = () => ({
    data:[]
})

export const mutations = {
    storeShopping_sessions:(state,data) =>{
        state.data = data
    }
}
