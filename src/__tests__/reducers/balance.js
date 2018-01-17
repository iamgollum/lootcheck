import balanceReducer from '../../reducers/balance';
import * as constants from '../../actions/constants';

describe('balance reducer', () => {
    it('sets a balance', () => {
        const balance = 10;

        const actionData = { type: constants.SET_BALANCE, balance };

        expect(balanceReducer(undefined, actionData)).toEqual(balance)
    })

    it('deposits into the balance', () => {
        const deposit = 10;
        const initialData = 5;

        const actionData = { type: constants.DEPOSIT, deposit };
        expect(balanceReducer(initialData, actionData)).toEqual(deposit + initialData)
    })

    describe('withdrawal', () => {
        
        const withdrawal = 10;

        it('occurs when there is enouph balance', () => {
            const initialData = 10;

            const actionData = {type: constants.WITHDRAW, withdrawal};
            expect(balanceReducer(initialData, actionData)).toEqual(initialData - withdrawal)
        })

        it('does not occur when there is not enough balance', () => {
            const initialData = 5;

            const actionData = {type: constants.WITHDRAW, withdrawal};
            expect(balanceReducer(initialData, actionData)).toEqual(initialData)
        })
    })
})