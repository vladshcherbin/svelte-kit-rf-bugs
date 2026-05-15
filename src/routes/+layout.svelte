<script lang="ts">
  import type { LayoutProps } from './$types.ts'

  const { children }: LayoutProps = $props()
</script>

{@render children()}
