export const state = () => ({
    data:[]
})

export const mutations = {
    storeProducts:(state,data) =>{
        state.data = data
    }
}
