import { chrome } from 'jest-chrome'
import { mock } from '@utils/chrome'

// ---------------------------------------------------------------------------------------------------------------------
// classes
// ---------------------------------------------------------------------------------------------------------------------

type BookmarkData = Partial<chrome.bookmarks.BookmarkTreeNode>

// ---------------------------------------------------------------------------------------------------------------------
// factory
// ---------------------------------------------------------------------------------------------------------------------

export function fakeBookmarks (data: BookmarkData[]) {
  const mocked: any = {}
  return mock('bookmarks', mocked)
}
