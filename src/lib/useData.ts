import { useEffect, useState } from 'react'

export const useData = () => {
  const [data, setData] = useState('')
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function getData () {
      const resp = await fetch(
        'https://bartlomiejmendecki.gitlab.io/mitre/mitre.json'
      )
      if (!resp.ok) {
        throw new Error(`Error occured: ${resp.status}`)
      }
      const result = await resp.json()
      setData(result)
      setLoading(false)
    }
    getData()
  }, [])
  return { data, loading }
}
