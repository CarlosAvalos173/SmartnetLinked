export const state = () => ({
    data:[]
})

export const mutations = {
    storePayment_details:(state,data) =>{
        state.data = data
    }
}
