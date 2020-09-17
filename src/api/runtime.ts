import { mock } from '@utils/chrome'

// ---------------------------------------------------------------------------------------------------------------------
// classes
// ---------------------------------------------------------------------------------------------------------------------

type RuntimeData = Partial<{
  id: string
}>

// ---------------------------------------------------------------------------------------------------------------------
// factory
// ---------------------------------------------------------------------------------------------------------------------

export function fakeRuntime (data: RuntimeData = {}) {
  const db = data
  const mocked: any = {
    db
  }
  return mock('runtime', mocked)
}
