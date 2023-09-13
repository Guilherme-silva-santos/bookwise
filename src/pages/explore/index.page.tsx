import Head from 'next/head'
import { ChangeEvent, ReactElement, useEffect, useState } from 'react';
import DefaultLayout from '@/Layout';
import { NextPageWithLayout } from '../_app.page';

import { SearchInput } from '@/components/SearchInput';

import { Binoculars } from '@phosphor-icons/react';

import * as S from './styles'
import { theme } from '@/styles/stitches.config';
import { IBaseBook, IBaseRating, IBookWithAverage } from '@/interface/IBooks';
import { api } from '@/services/http';
import { Filters } from './components/Filters';
import { Loading } from '@/components/Generics/Loading';
import { ExplorerBookCard } from '@/components/Book/ExplorerBookCard';

interface IRequest {
  books: IBaseBook;
  ratings: IBaseRating[];
}

const ExplorePage: NextPageWithLayout = () => {
  const [books, setBooks] = useState<IBookWithAverage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filterSelected, setFilterSelected] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getPopularBooks = async () => {
      try {
        setIsLoading(true);
      
        const query = filterSelected ? `filter=${filterSelected}` : '';
        const response = await api.get<IRequest[]>(`/books?${query}`);

        let filteredResponse = response.data.map(({books, ratings}) => {
          const rate = ratings.reduce((acc, rating) => {
            return acc += rating.rate;
          }, 0);

          return {
            ...books,
            average: Math.round(rate / ratings.length)
          }
        });

        if(search.length > 0) {
          filteredResponse = filteredResponse.filter(book => 
            book.author.includes(search) || book.name.includes(search)
          )
        }
      
        setBooks(filteredResponse);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getPopularBooks();
  }, [filterSelected, search]);

  return (
    <>
      <Head>
        <title>Explorar | Book Wise</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* Page */}
      <div>
        <S.Search>
          <SearchInput 
            placeholder='Buscar livro ou autor'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </S.Search>

        <Filters 
          filterSelected={filterSelected} 
          updateFilter={setFilterSelected} 
        />
        
        {isLoading ? <Loading /> : (
          <S.ExplorerBooks>
            <>
              {books && books.map(book => (
                <ExplorerBookCard 
                  key={book.id} 
                  book={book} 
                />
              ))}
            </>        
          </S.ExplorerBooks>
        )}

      </div>
    </>
  )
}

ExplorePage.getLayout = (page: ReactElement) => {
  const { colors } = theme;

  return (
    <DefaultLayout 
      title='Explorar' 
      icon={<Binoculars size={32} color={colors.green100.value} />}
    >
      {page}
    </DefaultLayout>
  )
}

export default ExplorePage;