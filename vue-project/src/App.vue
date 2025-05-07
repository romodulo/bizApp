<script setup>
import TestEmailComponent from './components/TestEmailComponent.vue'

</script>

<template>
  <v-app>
    <v-app-bar :elevation="2" rounded>
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template>

      <v-app-bar-title>Application Bar</v-app-bar-title>
    
    </v-app-bar>
    
    <v-navigation-drawer>
      <v-list-item link title="Navigation drawer"></v-list-item>
      <v-list-item link title="List Item 1"></v-list-item>
      <v-list-item link title="List Item 2"></v-list-item>
      <v-list-item link title="List Item 3"></v-list-item>
    </v-navigation-drawer>

    <v-main>

      <!-- included 5- 7 -->
      <TestEmailComponent></TestEmailComponent>
      <!-- endOf-included-- 5- 7 -->

      <!-- <v-btn rounded = 'lg' size="large" elevation="8" class="mt-8 ml-7">halejkr</v-btn> -->
      <!-- <v-btn rounded = 'lg' size="large" elevation="8" class="d-block mx-auto mt-8">halejkr</v-btn> -->
      
      <v-card
        class="mx-auto mt-16 mb-8"
        elevation="16"
        max-width="344"
      >
        <v-card-item>
          <v-card-title>
            Card title
          </v-card-title>

          <v-card-subtitle>
            Card subtitle secondary text
          </v-card-subtitle>
        </v-card-item>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
      </v-card>
      <!-- <div class="d-flex"> -->
      <v-btn rounded = 'lg' size="large" elevation="8" class="d-block mx-auto my-8" max-width="230">test deployment_3</v-btn>
      <!-- </div> -->
    </v-main>

  </v-app>

  <!-- <v-card title="Card Title" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima, at placeat totam, magni doloremque veniam neque porro libero rerum unde voluptatem!"></v-card> -->
</template>

<style scoped>

</style>
