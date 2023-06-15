import type { Project } from '@/types'
import { writable } from 'svelte/store'
import { queryProjects } from 'webkit/api/projects'

const projectsStore = writable<Project[]>([])

export default {
  subscribe: projectsStore.subscribe,
  fetchProjects: async () => {
    const projects = await queryProjects()
    projectsStore.set(projects)
  },
}
