<script lang="ts">
  import { resolve } from '$app/paths'
  import type { LayoutProps } from './$types.ts'

  const { children }: LayoutProps = $props()
</script>

<header>
  <nav>
    <ul>
      <li><a href={resolve('/')}>home</a></li>
      <li><a href={resolve('/cars')}>cars</a></li>
      <li><a href={resolve('/about')}>about</a></li>
    </ul>
  </nav>
</header>
{@render children()}

<style>
  :global(body) {
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: oklch(98.5% 0 0deg);
    background-color: oklch(14.5% 0 0deg);
    padding: 24px;
  }

  a {
    color: oklch(98.5% 0 0deg);
  }

  ul {
    list-style: none;
    padding: 0;
  }
</style>
