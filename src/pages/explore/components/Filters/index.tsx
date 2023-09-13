import { filters } from '../../utils/books-filters';
import * as S from './styles';

interface Props {
  filterSelected: string;
  updateFilter: (filter: string) => void;
}

export function Filters({filterSelected, updateFilter}: Props) {

  return (
    <S.Container>
      {filters.map(filter => (
        <S.Filter
          key={filter.id}
          isSelected={filterSelected === filter.value}
          onClick={() => updateFilter(filter.value)}
        >
          {filter.text}
        </S.Filter>
      ))}
    </S.Container>
  )
}