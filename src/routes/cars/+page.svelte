<script lang="ts">
  import { getCars } from '$lib/remote/get-cars.remote'
</script>

<h1>Cars List</h1>

<svelte:boundary>
  {@const cars = await getCars()}

  {#snippet pending()}
    <p>loading...</p>
  {/snippet}

  <p>got some cars: {cars.length}</p>
</svelte:boundary>
