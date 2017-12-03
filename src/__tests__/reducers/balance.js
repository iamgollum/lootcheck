import balanceReducer from '../../reducers/balance';
import * as constants from '../../actions/constants'

describe('balance reducer', () => {
    it('sets a balance', () => {
        const balance = 10;
        const actionData = { type: constants.SET_BALANCE, balance };
        expect(balanceReducer(undefined, actionData)).toEqual(balance)
    })
})