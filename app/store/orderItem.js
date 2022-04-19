export const state = () => ({
    id:0,
    order_id:0,
    product_id:0,
    quantity:0
})

export const mutations = {
    storeId:(state,data) =>{
        state.id = data
    },
    storeOrder_id:(state,data) =>{
        state.order_id = data
    },
    storeProduct_id:(state,data) =>{
        state.product_id = data
    },
    storeQuantity:(state,data)=>{
        state.quantity = data
    },
}