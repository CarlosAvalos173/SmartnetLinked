export const state = () => ({
    data:[]
})

export const mutations = {
    storeOrder_details:(state,data) =>{
        state.data = data
    }
}
