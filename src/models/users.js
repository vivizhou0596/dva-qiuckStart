import * as usersService from '../services/users';

export default {
  namespace: 'users',
  state: {
    list: [],
    total: null,
  },
  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
  },
  effects: {
    *fetch({ payload: { page = 1 } = {}}, { call, put }) {
      const result = yield call(usersService.fetch, { page });
      let data = result.data.data;
      let total = result.data.total;
      yield put({
                 type: 'save',
                 payload: {
                     data,
                     total,
                     page: parseInt(page, 10),
                   },
             });
    },
    *remove({payload:{id}},{ call, put }){
      return yield call(usersService.remove, id);
    },
    *patch({payload:{id,values}},{ call,put }){
       return yield call(usersService.patch, id,values);
    },
    *create({payload:values},{call,put}){
      return yield call(usersService.create, values);
    },
    *reload(action,{put,select}){
      const page = yield select(state=>state.users.page);
      yield put({ type:'fetch', payload: {page}})
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users') {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
