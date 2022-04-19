export const state = () => ({
    id:0,
    user_id:0,
    total:0.0,
    created_at:"",
    modified_at:""
})

export const mutations = {
    storeId:(state,data) =>{
        state.id = data
    },
    storeUser_id:(state,data) =>{
        state.user_id = data
    },
    storeCreated_at:(state,data)=>{
        state.created_at = data
    },
    storeModified_at:(state,data) =>{
        state.modified_at = data
    },
}