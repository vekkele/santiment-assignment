import type { Project } from '@/types'
import { writable } from 'svelte/store'
import { queryProjects } from 'webkit/api/projects'

function createProjectsStore() {
  const { subscribe, set } = writable<Project[]>([])

  return {
    subscribe,
    fetchProjects: async () => {
      const projects = await queryProjects()
      set(projects)
    },
  }
}

export const projects = createProjectsStore()

export const favoriteProjects = writable<Project[]>([])
