import { query } from '$app/server'
import { nullable, string } from 'valibot'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const getCars = query(nullable(string()), async () => {
  await delay(3000)

  // filter cars by brand

  return [
    { id: 1, name: 'Car 1' },
    { id: 2, name: 'Car 2' },
    { id: 3, name: 'Car 3' }
  ]
})
