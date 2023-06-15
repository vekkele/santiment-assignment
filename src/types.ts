import type { queryProjects } from 'webkit/api/projects'

export type Project = Awaited<ReturnType<typeof queryProjects>>[number]
