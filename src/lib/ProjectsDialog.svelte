<script lang="ts" context="module">
  import { dialogs } from 'webkit/ui/Dialog/dialogs'
  import type { DialogProps } from 'webkit/ui/Dialog/Dialog.svelte'

  export const showProjectsDialog = (props: DialogProps) => dialogs.showOnce(ProjectsDialog, props)
</script>

<script lang="ts">
  import Dialog from 'webkit/ui/Dialog/Dialog.svelte'
  import ProjectsDialog from './ProjectsDialog.svelte'
  import Search from 'webkit/ui/Search.svelte'
  import VirtualList from 'webkit/ui/VirtualList/index.svelte'
  import Asset from 'webkit/ui/ListOfAssets/Asset.svelte'
  import Checkbox from 'webkit/ui/Checkbox.svelte'
  import type { Project } from '@/types'
  import { favoriteProjects, projects } from '@/stores'

  let selected: Set<Project> = new Set($favoriteProjects)
  let closeDialog: () => void

  function toggle(item: Project) {
    if (selected.has(item)) {
      selected.delete(item)
    } else {
      selected.add(item)
    }

    selected = selected
  }

  function apply() {
    favoriteProjects.set(Array.from(selected))
    closeDialog()
  }
</script>

<Dialog {...$$props} bind:closeDialog title="Edit assets">
  <section class="content">
    <Search placeholder="Search for asset" />
    <div class="asset-list">
      <VirtualList itemHeight={32} items={$projects} let:item>
        <Asset {item} on:click={() => toggle(item)}>
          <Checkbox isActive={selected.has(item)} />
        </Asset>
      </VirtualList>
    </div>
    <div class="button-row row">
      <button class="btn-1" on:click={apply}>Apply changes</button>
      <button class="btn-2" on:click={closeDialog}>Cancel</button>
    </div>
  </section>
</Dialog>

<style>
  .content {
    padding: 16px;
  }

  .asset-list {
    height: 278px;
  }

  .button-row {
    margin-top: 28px;
  }

  button:not(:last-child) {
    margin-right: 12px;
  }
</style>
