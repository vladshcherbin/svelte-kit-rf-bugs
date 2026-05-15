import { query } from '$app/server'
import { nullable, string } from 'valibot'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const getCarsCount = query(nullable(string()), async () => {
  await delay(2000)

  // filter cars count by brand

  return 3
})
