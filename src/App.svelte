<script lang="ts">
  import { onMount } from 'svelte'
  import { projects } from './stores'
  import Search from 'webkit/ui/Search.svelte'
  import { showProjectsDialog } from '@/lib/ProjectsDialog.svelte'
  import VirtualList from 'webkit/ui/VirtualList/index.svelte'
  import Asset from 'webkit/ui/ListOfAssets/Asset.svelte'
  import { favoriteProjects } from '@/stores'
  import { projectHasText } from './utils'
  import type { InputEvent } from './types'

  let search = ''

  function onSearch(e: InputEvent) {
    search = e.target.value
  }

  $: filteredFavorites = $favoriteProjects.filter((p) => projectHasText(p, search))

  onMount(() => {
    projects.fetchProjects()
  })
</script>

<main class="column hv-center">
  <section class="box-section border">
    <Search placeholder="Search for asset" value={search} on:input={onSearch} />
    <div class="asset-list">
      <VirtualList itemHeight={32} items={filteredFavorites} let:item>
        <Asset {item} class="btn-ghost favorite-asset-item" />
      </VirtualList>
    </div>
    <button class="btn-1 fluid row hv-center" on:click={showProjectsDialog}>Edit assets</button>
  </section>
</main>

<style>
  :global(.favorite-asset-item) {
    pointer-events: none;
  }

  main {
    height: 100vh;
  }

  .box-section {
    min-width: 320px;
    max-width: 380px;
    padding: 16px;
    margin: 20px 40px;
  }

  .asset-list {
    height: 278px;
    margin-bottom: 36px;
  }
</style>
