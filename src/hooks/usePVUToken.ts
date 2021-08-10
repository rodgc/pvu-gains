import { useState } from 'react'

export const usePVUToken = () => {
  const [pvuToken, setPvuToken] = useState<string | null>(null)

  if (pvuToken === null) {
    setPvuToken(localStorage.getItem('pvuToken') || '')
  }

  return { pvuToken }
}
