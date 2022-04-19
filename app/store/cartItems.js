export const state = () => ({
    data:[]
})

export const mutations = {
    storeCartItems:(state,data) =>{
        state.data = data
    }
}
