import Image from 'next/image';

import { IBook } from '@/interface/IBooks';

import { Box } from "@/components/Box";

import * as S from "./styles";
import { AvaliationStars } from '@/components/Generics/AvaliationStars';

type Props = {
  book: (IBook & {
    rate: number;
  })
}

export function BookCardReduce({book}: Props) {

  const book_image = book.cover_url.replace('public', '');
  

  return (
    <Box>
      <Image
        src={book_image}
        alt={book.name}
        width={64}
        height={94}
        loading="lazy"
      />
        
      <S.Content>
        <S.Header>
          <h3>{book.name}</h3>
          <span>{book.author}</span>
        </S.Header>

        <AvaliationStars bookRating={book.rate} />
      </S.Content>

    </Box>
  )
}