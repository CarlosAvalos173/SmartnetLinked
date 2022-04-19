export const state = () => ({
    id:0,
    user_id:0,
    street:"",
    int_number:"",
    ext_number:"",
    colony:"",
    city:"",
    zip_code:"",
    created_at:"",
    modified_at:""
})

export const mutations = {
    storeId:(state,data) =>{
        state.id = data
    },
    storeUser_Id:(state,data) =>{
        state.user_id = data
    },
    storeStreet:(state,data) =>{
        state.street = data
    },
    storeInt_Number:(state,data) =>{
        state.int_number = data
    },
    storeExt_Number:(state,data) =>{
        state.ext_number = data
    },
    storeColony:(state,data) =>{
        state.colony = data
    },
    storeCity:(state,data) =>{
        state.city = data
    },
    storeZip_code:(state,data) =>{
        state.zip_code = data
    },
    storeCreated:(state,data) =>{
        state.created_at = data
    },
    storeModified:(state,data) =>{
        state.modified_at = data
    },
}