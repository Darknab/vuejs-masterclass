<script setup lang="ts">
import { usePageStore } from '@/stores/page'
import { projectsQuery } from '@/utils/supaQueries'
import type { projects } from '@/utils/supaQueries'
import { columns } from '@/utils/tableColumns/projectsColumns'

usePageStore().pageData.title = 'Projects'

const projects = ref<projects | null>(null)

const getProjects = async () => {
  const { data, error } = await projectsQuery

  if (error) console.log(error)

  projects.value = data
}

await getProjects()
</script>

<template>
  <DataTable v-if="projects" :columns="columns" :data="projects" />
</template>
