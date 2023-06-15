<script lang="ts">
  import Search from 'webkit/ui/Search.svelte'
  import { showProjectsDialog } from '@/lib/ProjectsDialog.svelte'
</script>

<section class="box-section border">
  <Search placeholder="Search for asset" />
  <button class="btn-1 fluid row hv-center" on:click={showProjectsDialog}>Edit assets</button>
</section>

<style>
  .box-section {
    min-width: 320px;
    max-width: 380px;
    padding: 16px;
    margin: 20px 40px;
  }
</style>
