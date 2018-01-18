import balanceReducer from '../../reducers/balance';
import balanceCacheReducer from '../../reducers/balance'
import * as constants from '../../actions/constants';

describe('balance reducer', () => {
    const balance = 10;

    describe('when initializing', () => {
        it('sets a balance', () => {
            const actionData = {type: constants.SET_BALANCE, balance};

            expect(balanceReducer(undefined, actionData)).toEqual(balance)
        });

        describe('then re-initializing', () => {
            it('reads the balance from cookies', () => {
                // Same reducer as balanceReducer; renamed on import
                // Note: this depends on the previous test to run before
                // this test to set the initial balance - bad practise
                // TODO: make this test independent
                expect(balanceCacheReducer(undefined, {})).toEqual(balance)
            });
        });
    });

    it('deposits into the balance', () => {
        const deposit = 10;
        const actionData = { type: constants.DEPOSIT, deposit };

        expect(balanceReducer(balance, actionData)).toEqual(deposit + balance)
    });

    describe('withdrawal', () => {
        
        const withdrawal = 10;

        it('occurs when there is enouph balance', () => {
            const actionData = {type: constants.WITHDRAW, withdrawal};

            expect(balanceReducer(balance, actionData)).toEqual(balance - withdrawal)
        });

        it('does not occur when there is not enough balance', () => {
            const initialData = 5;
            const actionData = {type: constants.WITHDRAW, withdrawal};

            expect(balanceReducer(initialData, actionData)).toEqual(initialData)
        })
    })
});