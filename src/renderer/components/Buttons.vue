<script setup lang="ts">
import { computed } from "vue";
import { exportCsv } from "../libs/exportCsv/exportCsv";
import { useSearchStore } from "../stores/search";

const store = useSearchStore();
const status = computed(() => store.getStatus);
const results = computed(() => store.getResults);

const handleOnExport = () => {
  exportCsv(results.value);
};
</script>

<template>
  <div class="flex gap-4">
    <button
      v-if="status === 'searching'"
      class="rounded-full text-white bg-slate-800 px-4"
      @click="store.stopSearching"
    >
      Stop
    </button>

    <button
      v-if="status === 'searched' && results.length > 0"
      class="rounded-full text-white bg-slate-800 px-4"
      @click="handleOnExport"
    >
      Export CSV
    </button>
  </div>
</template>
