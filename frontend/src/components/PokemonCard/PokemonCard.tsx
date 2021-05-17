import React, { FC } from 'react';
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
    <>
      <div className="pokemon-card">
        <Link to={`/pokemon/${id}`} className='pokemon-card__portal'>
          <img src={`${pokemonImg}.png`} alt={name} className='pokemon-card__img'/>
          <div className="pokemon-card__name">{name}</div>
        </Link>
        <button className="btn" disabled={!!caughtDate} onClick={catchPokemon}>catch!</button>
      </div>
    </>
  );
};

export default PokemonCard;
