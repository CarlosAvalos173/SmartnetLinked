export const state = () => ({
    data:[]
})

export const mutations = {
    storeProduct_categories:(state,data) =>{
        state.data = data
    }
}
