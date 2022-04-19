<template>
  <v-form>
  <v-text-field v-if="id" v-model="id"></v-text-field>
  <v-text-field v-model="first_name" label="First Name"></v-text-field>
  <v-text-field v-model="last_name" label="Last Name"></v-text-field>
  <v-text-field v-model="email" label="Email"></v-text-field>
  <v-btn color ="success" @click="submitUser({id,first_name,last_name,email})">
    Submit
  </v-btn>
  </v-form>
</template>

<script>
export default {
  computed:{
    id:{
      get(){
        return this.$store.state.user.id;
      },
      set(value){
        this.$store.commit("user/storeId",value);
      }
    },
    first_name:{
      get(){
        return this.$store.state.user.first_name;
      },
      set(value){
        this.$store.commit("user/storeFName",value)
      }
    },
    last_name:{
      get(){
        return this.$store.state.user.last_name;
      },
      set(value){
        this.$store.commit("user/storeLName",value);
      }
    },
    email:{
      get(){
        return this.$store.state.user.email;
      },
      set(value){
        this.$store.commit("user/storeEmail",value);
      }
    }
  },
  methods:{
    async submitUser(user){
      if(user.id){
        await this.$axios.put("http://localhost:8000" + user.id, user);
      }else{
        await this.$axios.post("http://localhost:8000",user);
      }
      
      await this.resetForm({id:0,FName:'',LName:0,email:''});
      await this.$store.commit("users/storeUsers",(await this.$axios.get("http://localhost:8000").data));
    },
  resetForm(user){
    this.$store.commit("user/storeId",user.id);
    this.$store.commit("user/storeFName",user.first_name);
    this.$store.commit("user/storeLName",user.last_name);
    this.$store.commit("user/storeEmail",user.email);
    }
  },
};
</script>

<style>

</style>