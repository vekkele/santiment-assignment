<script lang="ts">
  import SelectedBox from '@/lib/SelectedBox.svelte'
  import { onMount } from 'svelte'
  import projects from './stores/projects'

  onMount(() => {
    projects.fetchProjects()
  })
</script>

<main class="column hv-center">
  <SelectedBox />
</main>

<style>
  main {
    height: 100vh;
  }
</style>
