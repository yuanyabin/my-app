import * as FailActions from '../actions/fail.action';

export interface State {
    errorCode: string;
}

export const initState: State = {
    errorCode: '无法连接服务器'
};

export function reducer(state = initState, action: FailActions.Actions): State {
    switch (action.type) {
        case FailActions.FAIL_RESPONSE: { // 真实环境这个地方需要做修改
            return Object.assign({}, state, {
                errorCode: '无法连接服务器'
              });
        }
    }
}

export const getErrorCode = (state: State) => state.errorCode;
