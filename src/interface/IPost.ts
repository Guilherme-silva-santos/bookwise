import { IBook } from "./IBooks"

export interface IPostPreview {
  id: number,
  book: Omit<IBook, 'id'>,
  post: {
    author: string,
    publised_at: string
  }
}