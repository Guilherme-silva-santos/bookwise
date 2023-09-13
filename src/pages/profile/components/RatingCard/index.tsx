import NextImage from "next/image";

import { Box } from "@/components/Box";

import { IBaseBook, IBaseRating } from "@/interface/IBooks";
import { publishedDateFormat } from '@/utils/published-date-format';
import { AvaliationStars } from '@/components/Generics/AvaliationStars';

import * as S from './styles';

interface Props {
  rating: IBaseRating;
  book: IBaseBook;
}

export function RatingCard({ book, rating }: Props) {
  const published_at = publishedDateFormat(rating.created_at);
  const book_image = book.cover_url.replace('public', '');

  return (
    <>
      <S.Title>{published_at}</S.Title>

      <Box direction="column">
        <S.Row>
          <NextImage
            src={book_image}
            alt={book.name}
            width={98}
            height={138}
          />
          
          <S.Content>
            <S.Header>
              <h3>{book.name}</h3>
              <span>{book.author}</span>
            </S.Header>

            <AvaliationStars bookRating={rating.rate} />
          </S.Content>
        </S.Row>
        <S.Rating>{rating.description}</S.Rating>
      </Box>
    </>
  )
}