<script lang="ts">
  import { goto } from '$app/navigation'
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import { getCars } from '$lib/remote/get-cars.remote'
  import { getCarsCount } from '$lib/remote/get-cars-count.remote'

  const brandId = $derived(page.url.searchParams.get('brand'))
</script>

<h1>Cars List</h1>
<p>current brand id - {brandId ?? 'none'}</p>

<ul>
  <li><button onclick={() => goto(resolve('/cars?brand=1'))}>set brand to 1</button></li>
  <li><button onclick={() => goto(resolve('/cars?brand=2'))}>set brand to 2</button></li>
  <li><button onclick={() => goto(resolve('/cars?brand=3'))}>set brand to 3</button></li>
</ul>

<svelte:boundary>
  {@const cars = await getCars(brandId)}
  {@const carsCount = await getCarsCount(brandId)}

  {#snippet pending()}
    <p>loading...</p>
  {/snippet}

  <p>got some cars: {cars.length}</p>
  <p>counted cars: {carsCount}</p>
</svelte:boundary>

<style>
  ul {
    list-style: none;
    padding: 0;
  }
</style>