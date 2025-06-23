<template>
  <v-container class="fill-height" max-width="900">
    <v-card>
      <v-card-title>API Example</v-card-title>
      <v-card-text>
        <v-btn @click="fetchData" color="primary">Fetch Data</v-btn>
        <div v-if="message" class="mt-4">{{ message }}</div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { ref } from "vue";

const message = ref("");

const fetchData = async () => {
  try {
    const response = await fetch("/api/users");
    const data = await response.json();
    message.value = data.message;
  } catch (error) {
    message.value = "Error fetching data";
    console.error(error);
  }
};
</script>
