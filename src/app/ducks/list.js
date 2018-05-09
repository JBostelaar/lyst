import createAction from 'services/createAction';
import _ from 'lodash/fp';

const LIST_ADD = 'LIST_ADD';
const LIST_ADD_SUCCESS = 'LIST_ADD_SUCCESS';
const LIST_ADD_FAILED = 'LIST_ADD_FAILED';

const LIST_TOGGLE = 'LIST_TOGGLE';
const LIST_TOGGLE_SUCCESS = 'LIST_TOGGLE_SUCCESS';
const LIST_TOGGLE_FAILED = 'LIST_TOGGLE_FAILED';

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
        items: [...state.items, payload],
        loading: false,
      };
    case LIST_ADD_FAILED:
      return {
        ...state,
        error: true,
        loading: false,
      };
    case LIST_TOGGLE_SUCCESS:
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === payload.id) return { ...item, done: !item.done };
          return item;
        }),
        loading: false,
      };
    case LIST_TOGGLE:
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
    dispatch(listAddSuccess({ label: values.todo, done: false, id: _.uniqueId() }));
    resolve();
  })
);

export const listToggleSuccess = createAction(LIST_TOGGLE_SUCCESS);
export const listToggleFailed = createAction(LIST_TOGGLE_FAILED);

export const listToggle = id => (dispatch) => {
  dispatch({ type: LIST_TOGGLE });
  dispatch(listToggleSuccess({ id }));
};
