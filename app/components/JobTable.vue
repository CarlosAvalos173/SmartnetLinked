<template>
  <v-data-table :headers="headers" :items="rols">
    <template v-slot:[`item.edit`]="{item}">
      <v-btn color="primary" @click="editItem(item)">Edit</v-btn>
    </template>
    <template v-slot:[`item.delete`]="{item}">
      <v-btn color="primary" @click="deleteItem(item.id)">Delete</v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
    data () {
      return {
        headers: [
        { text: 'iD', value: 'id' },
          { text: 'Name', value: 'name' },
          { text: 'Description', value: 'description' },
          { text: 'Edit', value: 'edit' },
          { text: 'Delete', value: 'delete' },
        ],
      }
    },
    computed:{
      rols(){
        return this.$store.state.rols.data;
      }
    },
    async fetch() {
      this.$store.commit("rols/storeRols",(await this.$axios.get("http://localhost:8000/rols")).data);
    },
    methods: {
      editItem(rol){
        this.$store.commit("rol/storeId",rol.id);
        this.$store.commit("rol/storeName",rol.name);
        this.$store.commit("rol/storeDescription",rol.description);
    },
      async deleteItem(id){
        await this.$axios.delete('http://localhost:8000/rols/'+id);
        this.$store.commit("rols/storeRols",(await this.$axios.get("http://localhost:8000/rols")).data);
      }
    }
  }
  
</script>

<style>

</style>