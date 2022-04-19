<template>
    <v-data-table
        :headers="headers"
        :items="users"
  >
  <template v-slot:[`item.edit`] = "{item}">
    <v-btn color="primary" @click="editItem(item)">Edit</v-btn>
  </template>
  <template v-slot:[`item.delete`] = "{item}">
    <v-btn color="primary" @click="deleteItem(item)">Delete</v-btn>
  </template>
  </v-data-table>
</template>

<script>
export default {
    data () {
      return {
        headers: [
          { text: 'First Name', value: 'calories' },
          { text: 'Last Name', value: 'fat' },
          { text: 'Email', value: 'carbs' },
          { text: 'Edit', value: 'protein' },
          { text: 'Delete', value: 'iron' },
        ],
      }
    },
    computed:{
      users(){
        return this.$store.state.users.data;
      }
    },
    async fetch(){
        this.$store.commit('users/storeUsers',(await this.$axios.get('http://localhost:8000/users')).data);
    },
    methods: {
      editItem(user){
        this.$store.commit("user/storeId",user.id);
        this.$store.commit("user/storeFName",user.first_name);
        this.$store.commit("user/storeLName",user.last_name);
        this.$store.commit("user/storeEmail",user.email);
    },
      async deleteItem(it){
        await this.$axios.delete('http://localhost:8000/'+id);
      }
    }
  }
  
</script>

<style>

</style>