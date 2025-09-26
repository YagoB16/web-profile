import { useState, useEffect } from 'react'

interface UseLoadingOptions {
  duration?: number
  initialLoading?: boolean
}

export function useLoading(options: UseLoadingOptions = {}) {
  const { duration = 2000, initialLoading = true } = options
  const [isLoading, setIsLoading] = useState(initialLoading)

  useEffect(() => {
    if (!initialLoading) return

    const timer = setTimeout(() => {
      setIsLoading(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, initialLoading])

  const startLoading = () => setIsLoading(true)
  const stopLoading = () => setIsLoading(false)

  return {
    isLoading,
    startLoading,
    stopLoading,
    setIsLoading
  }
}
