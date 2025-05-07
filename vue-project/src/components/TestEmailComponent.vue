<script setup>

</script>

<template>
    <!-- <v-card
        class="mx-auto"
        max-width="450"
    > -->
        <v-list lines="two">
            <template v-for="n in 6" :key="n">
                <v-list-item
                    :title="`Message ${n}`"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique">
                <template v-slot:prepend>
                    <v-avatar color="grey-darken-1"></v-avatar>
                </template>
                </v-list-item>
                <v-divider
                    v-if="n !== 6"
                    :key="`divider-${n}`"
                    inset
                    >
                
                </v-divider>
            </template>
        </v-list>
    <!-- </v-card> -->
</template>

<style scoped>

</style>