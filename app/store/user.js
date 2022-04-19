export const state = () => ({
    id:0,
    first_name:"",
    last_name:"",
    address:"",
    telephone:"",
    email:"",
    rol_id:1,
    username:"",
    password:"",
    created_at:""
})

export const mutations = {
    storeId:(state,data) =>{
        state.id = data
    },
    storeFName:(state,data) =>{
        state.first_name = data
    },
    storeLName:(state,data) =>{
        state.last_name = data
    },
    storeAddress:(state,data) =>{
        state.address = data
    },
    storeTelephone:(state,data) =>{
        state.telephone = data
    },
    storeEmail:(state,data) =>{
        state.email = data
    },
    storeRol_id:(state,data) =>{
        state.rol_id = data
    },
    storeUsername:(state,data) =>{
        state.username = data
    },
    storePassword:(state,data) =>{
        state.password = data
    },
    storeDate:(state,data) =>{
        state.created_at = data
    },
}


