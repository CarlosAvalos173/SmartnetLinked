export const state = () => ({
    id:0,
    name:"",
    description:"",
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
    storeCreated_at:(state,data)=>{
        state.created_at = data
    },
    storeModified_at:(state,data)=>{
        state.modified_at = data
    },
}