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
  import projects from '@/stores/projects'
  import type { Project } from '@/types'

  let selected: Set<Project> = new Set()

  function toggle(item: Project) {
    if (selected.has(item)) {
      selected.delete(item)
    } else {
      selected.add(item)
    }

    selected = selected
  }
</script>

<Dialog {...$$props} title="Edit assets">
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
      <button class="btn-1">Apply changes</button>
      <button class="btn-2">Cancel</button>
    </div>
  </section>
</Dialog>

<style>
  .content {
    padding: 16px;
  }

  .asset-list {
    height: 288px;
  }

  .button-row {
    margin-top: 28px;
  }

  button:not(:last-child) {
    margin-right: 12px;
  }
</style>