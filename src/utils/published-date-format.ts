import dayjs from 'dayjs'
require('dayjs/locale/pt-br');

export function publishedDateFormat(dateString: string) {
  const today = dayjs();

  const convertedDate = dayjs(dateString);
  const diference = today.diff(convertedDate, 'd');

  const published_at = diference > 1 ? `Há ${diference} dias` 
    : diference === 1 ? `Há ${diference} dia`
    : 'Hoje';

  return published_at;
}