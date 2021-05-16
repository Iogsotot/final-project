import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { IPokemonCard } from './PokemonCard.model';
import './pokemonCard.scss';
import { catchPokemons } from '../../redux/action-creactors/userAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { MAX_IMGS_COUNT as maxPokemonsImgsCount } from '../../constants';

const PokemonCard: FC<IPokemonCard> = (props) => {
  const { userId } = useTypedSelector(store => store.userPokemonList);
  const {
    id,
    name,
    caughtDate,
  } = props;
  const dispatch = useDispatch();
  let pokemonImg = `/pokemons/${id}`;
  if (id > maxPokemonsImgsCount) {
    pokemonImg = '/pokemons/undefined';
  }

  function catchPokemon() {
    const currentDate = new Date().toISOString();
    dispatch(catchPokemons({ monsterId: id, name, userId, caughtDate: currentDate }));
  }

  return (
    <Link to={`/pokemon/${id}`}>
      <div className="pokemon-card">
        <img src={`${pokemonImg}.png`} alt={name} />
        <button className="btn" disabled={!!caughtDate} onClick={catchPokemon}>catch!</button>
      </div>
    </Link>
  );
};

export default PokemonCard;
