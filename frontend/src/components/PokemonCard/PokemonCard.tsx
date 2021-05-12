import { FC } from 'react';
import { IPokemonCard } from './PokemonCard.model';

const PokemonCard: FC<IPokemonCard> = (props) => {
  const {
    id,
    name,
    date,
    isCought,
  } = props;
  return (
    <div className="pokemon-card">
      <img src={`/pokemons/${id}.png`} alt={name} />
      <button className="btn">catch!</button>
    </div>
  );
};

export default PokemonCard;