export interface IBook {
  id: string;
  name: string;
  author: string;
  cover_url: string;
  created_at: string;
  summary: string;
  total_pages: number;
}

export interface IBookRating {
  id: string;
  book_id: string;
  description: string;
  rate: number;
  created_at: string;
}

export interface IBookDetails {
  book: (IBook & {
    rate: number;
  });
  ratings: (IBaseRating & {
    user: IBaseUser
  })[];
  categories: IBaseCategories[]
}

export interface IBaseRating {
  id: string;
  rate: number;
  book_id: string;
  user_id: string;
  description: string;
  created_at: string;
}

export interface IBaseCategories {
  book_id: string;
  categoryId: string;
  category : {
    id: string, 
    name: string
  }
}

export interface IBaseBook {
  id: string;
  name: string;
  author: string;
  cover_url: string;
  created_at: string;
  summary: string;
  total_pages: number;
}

export interface IBaseUser {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
  created_at: string;
}

export interface IBookWithAverage extends IBaseBook {
  average: number;
}

export interface IRatingWithUser {
  rating: IBaseRating;
  user: IBaseUser;
}