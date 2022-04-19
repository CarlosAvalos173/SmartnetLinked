export const state = () => ({
    id:0,
    user_id:0,
    payment_id:0,
    total:0.0,
    created_at:""
})

export const mutations = {
    storeId:(state,data) =>{
        state.id = data
    },
    storeUser_id:(state,data) =>{
        state.user_id = data
    },
    storePayment_id:(state,data) =>{
        state.payment_id = data
    },
    storeTotal:(state,data)=>{
        state.total = data
    },
    storeCreated_at:(state,data)=>{
        state.created_at = data
    },
}