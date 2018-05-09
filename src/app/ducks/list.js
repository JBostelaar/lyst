import createAction from 'services/createAction';

const LIST_ADD = 'LIST_ADD';
const LIST_ADD_SUCCESS = 'LIST_ADD_SUCCESS';
const LIST_ADD_FAILED = 'LIST_ADD_FAILED';

const initialState = {
  items: [],
  error: { message: '' },
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LIST_ADD_SUCCESS:
      return {
        ...state,
        items: [...state.items, payload.todo],
        loading: false,
      };
    case LIST_ADD_FAILED:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case LIST_ADD:
      return {
        ...state,
        loading: true,
        error: initialState.error,
      };
    default:
      return state;
  }
};

export const listAddSuccess = createAction(LIST_ADD_SUCCESS);
export const listAddFailed = createAction(LIST_ADD_FAILED);

export const listAdd = values => dispatch => (
  new Promise((resolve) => {
    dispatch({ type: LIST_ADD });
    dispatch(listAddSuccess(values));
    resolve();
  })
);
