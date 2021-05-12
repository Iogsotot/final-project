import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/action-creators';
import { PokemonsDispatchProps } from '../models/pokemon';
import { UsersDispatchProps } from '../models/user';

type DispatchProps = UsersDispatchProps & PokemonsDispatchProps;

export const useAction = (): DispatchProps => {
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return bindActionCreators(ActionCreators, dispatch);
};
