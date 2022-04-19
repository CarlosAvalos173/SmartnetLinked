export const state = () => ({
    id:0,
    session_id:0,
    product_id:0,
    quantity:0,
    created_at:"",
    modified_at:""
})

export const mutations = {
    storeId:(state,data) =>{
        state.id = data
    },
    storeSession_id:(state,data) =>{
        state.session_id = data
    },
    storeProduct_id:(state,data) =>{
        state.product_id = data
    },
    storeQuantity:(state,data)=>{
        state.quantity = data
    },
    storeCreated_at:(state,data)=>{
        state.created_at = data
    },
    storeModified_at:(state)=>{
        state.modified_at = data
    },
}