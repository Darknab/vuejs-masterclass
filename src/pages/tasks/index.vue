<script setup lang="ts">
import { usePageStore } from '@/stores/page'
import { tasksWithProjectQuery } from '@/utils/supaQueries'
import { columns } from '@/utils/tableColumns/tasksColumns'

usePageStore().pageData.title = 'Tasks'

const tasks = ref<tasksWithProjectQuery | null>(null)

const getTasks = async () => {
  const { data, error } = await tasksWithProjectQuery

  if (error) console.log(error)

  tasks.value = data
}

await getTasks()
</script>

<template>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
</template>
