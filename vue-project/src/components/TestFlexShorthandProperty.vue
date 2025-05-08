<script setup>
import NewSheetComponent from './NewSheetComponent.vue'
</script>

<template>
    <!-- flex-1-1-0 -->
    <v-sheet class="d-flex mt-5 mx-8">
        <!-- <v-sheet class="flex-1-1 item-1-self border">This inside a container</v-sheet>
        <v-sheet class="flex-1-1 item-2-self border">Another container</v-sheet>
        <v-sheet class="flex-1-1 item-3-self border">Another container</v-sheet> -->
        <v-sheet 
        class="flex-grow-1 flex-shrink-1 item-1-self border text-center">
            Court 1
        </v-sheet>

        <v-sheet 
        class="flex-grow-1 flex-shrink-1 item-2-self border text-center">
            Court 2
        </v-sheet>

        <v-sheet 
        class="flex-grow-1 flex-shrink-1 item-3-self border text-center">
            Court 3
        </v-sheet>

        <v-sheet 
        class="flex-grow-1 flex-shrink-1 item-4-self border text-center">
            Court 4
        </v-sheet>

        <v-sheet 
        class="flex-grow-1 flex-shrink-1 item-5-self border text-center">
            Court 5
        </v-sheet>

        <v-sheet 
        class="flex-grow-1 flex-shrink-1 item-6-self border text-center">
            Court 6
        </v-sheet>
    </v-sheet>
    <NewSheetComponent></NewSheetComponent>
  
</template>

<style scoped>
/* i used to have  */
/* a style called */
/* .item-1-self or */
/* .item-${number}-self */
/*  */
</style>
