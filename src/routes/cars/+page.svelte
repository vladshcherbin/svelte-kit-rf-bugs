<script lang="ts">
  import { getCars } from '$lib/remote/get-cars.remote'
  import { getCarsCount } from '$lib/remote/get-cars-count.remote'
</script>

<h1>Cars List</h1>

<svelte:boundary>
  {@const cars = await getCars()}
  {@const carsCount = await getCarsCount()}

  {#snippet pending()}
    <p>loading...</p>
  {/snippet}

  <p>got some cars: {cars.length}</p>
  <p>counted cars: {carsCount}</p>
</svelte:boundary>
