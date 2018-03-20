import * as UserActions from '../actions/user.action';
import * as UserModel from '../models/user.model';

export interface State {
    data: UserModel.User[];
}

export const initialState: State = {
    data: [
        {id: 1, name: 'asda', Email: '984034589@qq.com', password: '123456'},
        {id: 1, name: 'asda', Email: '984034589@qq.com', password: '123456'},
        {id: 1, name: 'asda', Email: '984034589@qq.com', password: '123456'},
        {id: 1, name: 'asda', Email: '984034589@qq.com', password: '123456'},
        {id: 1, name: 'asdafagsdfga', Email: '984034589@qq.com', password: '123456'},
        {id: 1, name: 'asda', Email: '984034589@qq.com', password: '123456'},
        {id: 1, name: 'asda', Email: '984034589@qq.com', password: '123456'}
    ]
};

export function reducer(state = initialState, action: UserActions.Actions): State {
    switch (action.type) {
        case UserActions.GET_USER_LIST_SUCCESS: {
            return Object.assign({}, state, action.payload);
        }
        default:
        return state;
    }
}

export const getUserList = (state: State) => state;
