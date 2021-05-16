import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IPokemonCard } from '../PokemonCard/PokemonCard.model';
import { Pokemon } from '../../models/pokemon';
import './currPokemon.scss';
import { catchPokemons } from '../../redux/action-creactors/userAction';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { MAX_IMGS_COUNT as maxPokemonsImgsCount } from '../../constants';
import { UserPokemon } from '../../models/user';

const PokemonCard: FC<IPokemonCard> = () => {
  const { userId, userPokemons } = useTypedSelector(store => store.userPokemonList);
  const { pokemons } = useTypedSelector(store => store.pokemonList);

  const pokemonParams: any | number = useParams();
  let { id } = pokemonParams;
  id = parseInt(id, 10);
  const pokemon: Pokemon = pokemons.find((monster: Pokemon) => monster.id === id);
  const userPokemon: any = userPokemons.find((monster: UserPokemon) => monster.monsterId === id);
  let caughtDate;
  if (userPokemon) {
    caughtDate = userPokemon.caughtDate;
  }
  const dispatch = useDispatch();

  let pokemonImg = `/pokemons/${id}`;
  if (id > maxPokemonsImgsCount) {
    pokemonImg = '/pokemons/undefined';
  }

  function catchPokemon() {
    const currentDate = new Date().toISOString();
    dispatch(catchPokemons({ monsterId: id, name: pokemon.name, userId, caughtDate: currentDate }));
  }

  function parseISOString(stringDate: string) {
    const humanReadableDate = stringDate.slice(0, 10).replace(/-/g, '.');
    return humanReadableDate;
  }

  const dateText = (dateToParse: string | undefined) => {
    if (dateToParse) {
      return ` Caught date: ${parseISOString(dateToParse)}`;
    }
    return 'You haven\'t caught this pokemon yet';
  };

  return (
    <div className="wrapper">
      <div className="curr-pokemon">
        <div className="curr-pokemon__card">
          <img src={`${pokemonImg}.png`} alt={pokemon.name} />
          <button className="btn" disabled={!!caughtDate} onClick={catchPokemon}>catch!</button>
        </div>
        <div className="pokemon-info">
          <div className="pokemon-info__name">
            Name: {pokemon.name}
          </div>
          <div className="pokemon-info__date">
            {dateText(caughtDate)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
