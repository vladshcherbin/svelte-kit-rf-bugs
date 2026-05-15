import { query } from '$app/server'

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const getCars = query(async () => {
  await delay(6000)

  return [
    { id: 1, name: 'Car 1' },
    { id: 2, name: 'Car 2' },
    { id: 3, name: 'Car 3' }
  ]
})
