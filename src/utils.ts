import type { Project } from './types'

export function projectHasText(asset: Project, text: string) {
  return includesText(asset.name, text) || includesText(asset.ticker, text)
}

function includesText(str: string, text: string) {
  return str.toLowerCase().includes(text.trim().toLowerCase())
}
