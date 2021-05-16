import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { IPokemonCard } from './PokemonCard.model';
// import { useTypedSelector } from '../../hooks/useTypedSelector';
import './pokemonCard.scss';
import { catchPokemons } from '../../redux/action-creactors/userAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const PokemonCard: FC<IPokemonCard> = (props) => {
  const { userId } = useTypedSelector(store => store.userPokemonList);
  const {
    id,
    name,
    caughtDate,
  } = props;
  const dispatch = useDispatch();
  const maxPokemonsImgCount = 720;
  let pokemonImg = `/pokemons/${id}.png`;
  if (id > maxPokemonsImgCount) {
    pokemonImg = '/pokemons/default.png';
  }

  function catchPokemon() {
    const currentDate = new Date().toISOString();
    dispatch(catchPokemons({ monsterId: id, name, userId, caughtDate: currentDate }));
  }

  return (
    <div className="pokemon-card">
      <img src={pokemonImg} alt={name} />
      <button className="btn" disabled={!!caughtDate} onClick={catchPokemon}>catch!</button>
    </div>
  );
};

export default PokemonCard;
