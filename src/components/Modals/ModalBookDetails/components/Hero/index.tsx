import Image from 'next/image'

import { IBaseBook, IBaseCategories, IBaseRating, IBookWithAverage } from '@/interface/IBooks'

import { Box } from '@/components/Box';
import { AvaliationStars } from '@/components/Generics/AvaliationStars';

import { BookmarksSimple, BookOpen } from '@phosphor-icons/react';

import * as S from './styles';
import { theme } from '@/styles/stitches.config';

export type ICategoryWithoutIds = Omit<IBaseCategories, 'book_id' | 'categoryId'>;

interface Props {
  book: IBaseBook;
  categories: IBaseCategories[];
  ratings: IBaseRating[];
}

export function Hero({book, categories, ratings}: Props) {
  const {colors} = theme;

  const book_image = book?.cover_url?.replace('public', '');
  const average = ratings ? ratings.reduce((acc, rating ) => {
    return acc += rating.rate
  }, 0) / ratings.length : 0

  return (
    <Box direction={"column"} padding="md">
      <S.HeroHeader>
        <Image
          src={book_image}
          alt={book.name}
          width={171}
          height={242}
        />

        <S.HeroDetails>
          <div>
            <S.Title>{book.name}</S.Title>
            <S.Escritor>{book.author}</S.Escritor>
          </div>

          <S.Ratio>
            <AvaliationStars bookRating={average} size={20} />
            <span>{ratings.length} Avaliações</span>
          </S.Ratio>
        </S.HeroDetails>
      </S.HeroHeader>

      <S.HeroFooter>
        <S.InfoContainer>
          <BookmarksSimple size={40} color={colors.green100.value} />
              
          <div>
            <strong>Categoria</strong>
            <div>
              {categories.map(({category}) => (
                <span key={category?.id}>
                  {category?.name}
                </span>
              ))}
            </div>
          </div>
        </S.InfoContainer>

        <S.InfoContainer>
          <BookOpen size={40} color={colors.green100.value} />            
          <div>
            <strong>Páginas</strong>
            <p>{book.total_pages}</p>
          </div>
        </S.InfoContainer> 
      </S.HeroFooter> 
    </Box>
  )
}