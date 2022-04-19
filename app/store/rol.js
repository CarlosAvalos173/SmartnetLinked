export const state = () => ({
    id:0,
    name:"",
    description:""
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
}