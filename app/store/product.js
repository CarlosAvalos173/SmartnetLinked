export const state = () => ({
    id:0,
    name:"",
    description:"",
    image:"",
    category_id:"",
    price:0.0,
    status:"",
    stock:0,
    created_at:"",
    modified_at:""


})

export const mutations = {
    storeId:(state,data) =>{
        state.id = data
    },
    storeName:(state,data) =>{
        state.name = data
    },
    storeDescription:(state,data) =>{
        state.description = data
    },
    storeImage:(state,data)=>{
        state.image = data
    },
    storeCategory_id:(state,data)=>{
        state.category_id = data
    },
    storePrice:(state,data)=>{
        state.price = data
    },
    storeStatus:(state,data)=>{
        state.status = data
    },
    storeStock:(state,data)=>{
        state.stock = data
    },
    storeCreated_at:(state,data)=>{
        state.created_at = data
    },
    storeModified_at:(state,data)=>{
        state.modified_at =data
    },
}