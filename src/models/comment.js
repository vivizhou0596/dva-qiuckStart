import * as commentService from '../services/comment';
import * as usersService from "../services/users";

export default {
  namespace: 'comment',
  state: {
    list: [],
    total: null,
  },
  reducers: {
    save(state, { payload: { data: list} }) {
      return { ...state, list};
    },
  },
  effects: {
    *fetch({ payload}, { call, put }) {
      const { data:{data} } = yield call(commentService.fetch);
      //console.log(data);
      yield put({
        type: 'save',
        payload: {
          data,
        },
      });
    },
    *create({payload:values},{call,put}){
      return yield call(commentService.create, values);
    },
    *remove({payload:values},{call,put}){
      return yield call(commentService.remove, values);
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        //console.log(query);
        if (pathname === '/comment') {
          dispatch({ type: 'fetch'});
        }
      });
    },
  },
};
