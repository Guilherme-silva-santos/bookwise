import { useRouter } from 'next/router'
import { useModal } from '@/hooks/useModal';
import { useSession } from 'next-auth/react';

import { IBaseRating, IBaseUser } from '@/interface/IBooks'

import { Post } from '../Post'
import { Avatar } from '@/components/Avatar'
import { SectionHeader } from '@/components/Generics/SectionHeader'
import { AvaliationStars } from '@/components/Generics/AvaliationStars'

import * as S from './styles'
import { publishedDateFormat } from '@/utils/published-date-format';

interface Props {
  ratings: (IBaseRating & {
    user: IBaseUser;
  })[];
  isAvailableForRating: boolean;
  setIsAvailableForRating: (status: boolean) => void;
  uploadRating: (description: string, rate: number) => void;
}

export function Ratings({ 
  ratings, 
  uploadRating,
  isAvailableForRating, 
  setIsAvailableForRating, 
}: Props) {
  const {data} = useSession();
  const { setSignInModal, setDetailsModal } = useModal();
  
  const userPost = ratings ? ratings.find(rating => rating.user_id === data?.id) : null;
  const otherPosts = ratings ? ratings.filter(rating => rating.user_id !== data?.id) : null;

  async function handleReview() {
    if(!data?.user) {
      setSignInModal(true);
      return;
    }  
    
    if(data?.user && userPost){
      console.log('Você já fez uma crítica para esse livro');
      setIsAvailableForRating(false);
      return;
    }

    setIsAvailableForRating(true);
  }

  const router = useRouter();

  async function handleRedirect(userId: string) {
    setDetailsModal(false);
    router.push(`/profile/${userId}`);
  }

  console.log(data)
  return (
    <S.ReviewsWrapper>
      <SectionHeader>
        <strong>Avaliações</strong>
        <button onClick={handleReview}>Avaliar</button>
      </SectionHeader>        

      {isAvailableForRating && ( 
        <Post 
          name={data?.name!}
          uploadRating={uploadRating}
          avatar_url={data?.avatar_url!} 
        />
      )}

      {userPost && (
        <S.Box 
          key={userPost.rate} 
          direction="column"
          onClick={() => handleRedirect(userPost.user_id)}
        >
          <SectionHeader>
            <S.Profile>
              <Avatar 
                width={40}
                height={40}
                alt={userPost.user.name}
                src={userPost.user.avatar_url}
              />

              <div>
                <S.Title>{userPost.user.name}</S.Title>
                <S.PublishedAt>{publishedDateFormat(userPost.created_at)}</S.PublishedAt>
              </div>
            </S.Profile>

            <AvaliationStars bookRating={userPost.rate}/>
          </SectionHeader>

          <p>{userPost.description}</p>
        </S.Box>
      )}

      {otherPosts && otherPosts.map(post => 
        (
          <S.Box 
            key={post.user.id} 
            direction="column"
            onClick={() => handleRedirect(post.user_id)}
          >
            <SectionHeader>
              <S.Profile>
                <Avatar 
                  width={40}
                  height={40}
                  alt={post.user.name}
                  src={post.user.avatar_url}
                />

                <div>
                  <S.Title>{post.user.name}</S.Title>
                  <S.PublishedAt>{publishedDateFormat(post.created_at)}</S.PublishedAt>
                </div>
              </S.Profile>

              <AvaliationStars bookRating={post.rate}/>
            </SectionHeader>

            <p>{post.description}</p>
          </S.Box>
        )) 
      }
    </S.ReviewsWrapper>
  )
}

