import Image from 'next/image';

import { theme } from "@/styles/stitches.config";

import { IUser } from '@/interface/IUser';
import { IBook, IBookRating } from '@/interface/IBooks';

import { Box } from '@/components/Box';
import { Star } from '@/components/Start';
import { Avatar } from '@/components/Avatar'

import * as Styled from './styles';
import { publishedDateFormat } from '@/utils/published-date-format';
import Link from 'next/link';

interface Props {
  book: IBook;
  user: IUser;
  rating: IBookRating;
}

export function BookCardWithPost({book, rating, user}: Props) {
  const { colors } = theme;
  const formated_date = publishedDateFormat(rating.created_at);

  return (
    <Box direction="column" padding={'md'}>
      <Styled.Header>
        <Styled.Profile>
          <Avatar 
            src={user.avatar_url}
            alt={user.name}
            width={40}
            height={40}
          />

          <div>
            <Link href={`/profile/${user.id}`} ><Styled.Title>{user.name}</Styled.Title></Link>
            <Styled.PublishedAt>{formated_date}</Styled.PublishedAt>
          </div>
        </Styled.Profile>
      </Styled.Header>

      <Styled.Content>
        <Image
          src={book.cover_url.replace('public', '')}
          alt={book.author}
          width={108}
          height={152}
          loading="lazy"
        />

        <Styled.Description>

          <Styled.Title>{book.name}</Styled.Title>
          <Styled.Author>{book.author}</Styled.Author>

          <Styled.About>{rating.description}</Styled.About>
        </Styled.Description>
      </Styled.Content>

      <Styled.Rate>
        {[...Array(5)].map((_, index) => {
          return (
            <Star 
              key={index} 
              color={index + 1 <= rating.rate && colors.purple100.value} 
            />
          )
        })}
      </Styled.Rate>
    </Box>
  )
}