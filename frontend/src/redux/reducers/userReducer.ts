import { UserAction, UserActionTypes, UserState } from '../../models/user';

const {
  FETCH_USER,
  LOGIN_USER_SUCCESS,
} = UserActionTypes;

const initialState: UserState = {
  user: {
    userId: '',
    name: '',
  },
  isLoggedIn: false,
  loading: false,
};

export const userReducer = (state = initialState, action: UserAction): UserState => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, loading: true };

    case LOGIN_USER_SUCCESS:
      return { ...state, loading: false, isLoggedIn: true, user: action.payload };

    default:
      return state;
  }
};
