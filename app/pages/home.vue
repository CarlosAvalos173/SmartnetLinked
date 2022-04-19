<template>
  <div>
    <Nav />
    <HomeCarousel :sale_items="products" />
    <br /><br />
    <v-container>
      <h1 class="text-md-h4 text-h6">Check these out</h1>
      <br />
      <ProductSlider :products="products" />
      <br /><br /><br />
      <Newsletter />
    </v-container>
    <Footer />
    <ScrollTop />
  </div>
</template>

<script>
export default {
  async created() {
    this.$store.commit("products/storeProducts",(await this.$axios.get("http://localhost:8000/products")).data);
  },
  computed:{
      products(){
        return this.$store.state.products.data;
      }
    },
  data() {
    return {
      sale_items: null,
    };
  },
};
</script>

<style></style>