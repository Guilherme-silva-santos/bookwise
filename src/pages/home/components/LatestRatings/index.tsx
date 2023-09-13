import { IUser } from "@/interface/IUser";
import { IBook, IBookRating } from "@/interface/IBooks";

import { BookCardWithPost } from "@/components/Book/BookCardWithPost";

import * as Styled from "./styles";
import { useEffect, useState } from "react";
import { api } from "@/services/http";
import { Loading } from "@/components/Generics/Loading";

interface Props {
  title: string;
}

interface IRatings {
  rating: IBookRating;
  book: IBook;
  user: IUser;
}

interface IRequestRatings {
  ratings: (IBookRating & {
    book: IBook
    user: IUser;
  })[]
}

export function LatestRatings({title}: Props) {
  const [ratings, setRatings] = useState<IRatings[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getLatestRatings = async () => {
      try {
        setIsLoading(true);
        const response = await api.get<IRequestRatings>(`/ratings/latest`);

        const filteredRatings = response.data.ratings.map((rating) => {
          return {
            book: rating.book,
            user: rating.user,
            rating: {
              id: rating.id,
              book_id: rating.book_id,
              description: rating.description,
              rate: rating.rate,
              created_at: rating.created_at
            },
          }
        });

        setRatings(filteredRatings);
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false);
      }
    }

    getLatestRatings();
  }, []);

  return (
    <Styled.LatestContainer>
      <Styled.Header>
        <strong>{title}</strong>
      </Styled.Header>

      {isLoading ? ( <Loading /> ) 
      : (
        <>
          {ratings && ratings.map(post => (
            <BookCardWithPost
              key={post.rating.id}
              book={post.book}
              user={post.user}
              rating={post.rating}
            />
          ))}
        </>
      )}
    </Styled.LatestContainer>
  )
}