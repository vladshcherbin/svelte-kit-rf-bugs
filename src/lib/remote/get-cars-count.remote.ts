import { query } from '$app/server'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const getCarsCount = query(async () => {
  await delay(4000)

  return 3
})
