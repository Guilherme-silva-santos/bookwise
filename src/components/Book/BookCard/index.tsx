import Image from 'next/image';

import { IBaseBook } from '@/interface/IBooks';

import { Box } from "@/components/Box";
import { AvaliationStars } from '@/components/Generics/AvaliationStars';

import * as S from './styles';
import { publishedDateFormat } from '@/utils/published-date-format';

interface Props {
  book: (IBaseBook & {
    rate: number;
  })
}

export function BookCard({book}: Props) {

  const book_image = book?.cover_url?.replace('public', '');
  const formated_date = publishedDateFormat(book.created_at);

  console.log(book)

  if(!book.id) return null;

  return (
    <Box>

      <S.Avaliation>
        <AvaliationStars bookRating={book.rate} />
      </S.Avaliation>

      <Image
        src={book_image}
        alt={book.name}
        width={108}
        height={152}
        loading="lazy"
      />

      <S.Description>
        <S.PublishedAt>{formated_date}</S.PublishedAt>

        <S.Title>{book.name}</S.Title>
        <S.Author>{book.author}</S.Author>

        <S.About>{book.summary}</S.About>
      </S.Description>
    </Box>
  )
}