import * as fromRouter from '@ngrx/router-store'; // 将angular/router连接到ngrx/store的粘合剂
import { createSelector } from 'reselect'; // Redux状态改变二次取值器，参见：https://github.com/reactjs/reselect
import { ActionReducer, combineReducers} from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';

import * as getUserList from './user.reducer';

import * as fromFailHandle from './fail.reducer';


export interface State {
    user: getUserList.State;
    fail: fromFailHandle.State;

}

const emptyState: State = {
    user: getUserList.initialState,
    fail: fromFailHandle.initState
};

const reducers = {
    user: getUserList.reducer,
    fail: fromFailHandle.reducer,
};

// 目前在开发阶段，他们只是用developmentReducer
const emptyReducer = combineReducers({});
// const developmentReducer: ActionReducer<State> = compose(storeFreeze)(reducers);
// const productionReducer: ActionReducer<State> = combineReducers(reducers);
const developmentReducer: any = compose(combineReducers)(reducers);
// const productionReducer: ActionReducer<State> = combineReducers(reducers);
export function reducer(state: any, action: any) {
//   return productionReducer(state, action);
//   switch (action.type) {
//     case 'asdfasdfasdfasdfasdf': {
//       return emptyReducer(emptyState, action);
//     }
//     default:
      return developmentReducer(state, action);
//   }
}

export const getFail = (state: State) => {
    return state.fail;
};
export const geterrorCode = createSelector(getFail, fromFailHandle.getErrorCode);

export const getUserListAction = (state: State) => state.user;
export const getCurrentUseList = createSelector(getUserListAction, getUserList.getUserList);

