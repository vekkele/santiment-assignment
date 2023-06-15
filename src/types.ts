import type { queryProjects } from 'webkit/api/projects'

export type Project = Awaited<ReturnType<typeof queryProjects>>[number]

export interface InputEvent extends Event {
  target: HTMLInputElement
}
