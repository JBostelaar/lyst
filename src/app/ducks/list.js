import createAction from 'services/createAction';
import uuid from 'uuid/v4';

const LIST_ADD = 'LIST_ADD';
const LIST_ADD_SUCCESS = 'LIST_ADD_SUCCESS';
const LIST_ADD_FAILED = 'LIST_ADD_FAILED';

const LIST_TOGGLE = 'LIST_TOGGLE';
const LIST_TOGGLE_SUCCESS = 'LIST_TOGGLE_SUCCESS';
const LIST_TOGGLE_FAILED = 'LIST_TOGGLE_FAILED';

const initialState = {
  items: __CLIENT__ && (JSON.parse(localStorage.getItem('listItems')) || []),
  error: { message: '' },
  loading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LIST_ADD_SUCCESS:
      return {
        ...state,
        items: [payload, ...state.items],
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
        items: payload,
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

    const listItem = { label: values.todo, done: false, id: uuid() };

    const currentItems = JSON.parse(localStorage.getItem('listItems')) || [];
    localStorage.setItem('listItems', JSON.stringify([listItem, ...currentItems]));

    dispatch(listAddSuccess(listItem));
    resolve();
  })
);

export const listToggleSuccess = createAction(LIST_TOGGLE_SUCCESS);
export const listToggleFailed = createAction(LIST_TOGGLE_FAILED);

export const listToggle = id => (dispatch, getState) => {
  dispatch({ type: LIST_TOGGLE });
  const listItems = getState().list.items.map((item) => {
    if (item.id === id) return { ...item, done: !item.done };
    return item;
  });

  localStorage.setItem('listItems', JSON.stringify(listItems));
  dispatch(listToggleSuccess(listItems));
};
