<template>
  <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded shadow w-[300px]">
      <h2 class="text-lg font-bold mb-2">{{ data.title }}</h2>
      <p class="mb-4">{{ data.message }}</p>
      <div class="flex justify-end gap-2">
        <button
          @click="onConfirm"
          class="bg-blue-500 text-white px-4 py-2 rounded"
        >
          OK
        </button>
        <button @click="onClose" class="bg-gray-300 px-4 py-2 rounded">
          Tutup
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(["data", "onConfirm", "onClose"]);
</script>
