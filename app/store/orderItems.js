export const state = () => ({
    data:[]
})

export const mutations = {
    storeOrder_items:(state,data) =>{
        state.data = data
    }
}
