import { FC } from 'react';
import { IPokemonCard } from './PokemonCard.model';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import './pokemonCard.scss';

const PokemonCard: FC<IPokemonCard> = (props) => {
  const {
    id,
    name,
    caughtDate,
  } = props;
  return (
    <div className="pokemon-card">
      <img src={`/pokemons/${id}.png`} alt={name} />
      <button className="btn" disabled={!!caughtDate}>catch!</button>
    </div>
  );
};

export default PokemonCard;
