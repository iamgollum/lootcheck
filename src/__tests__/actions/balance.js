import * as constants from '../../actions/constants';
import * as actions from '../../actions/balance';

it('creates an action to set the balance', () => {
   const balance = 0;

   const expectedAction = { type: constants.SET_BALANCE, balance}

   expect(actions.setBalance(balance)).toEqual(expectedAction);
});

it('creates an action to add to the balance', () => {
    const deposit = 10;

    const expectedAction = { type: constants.DEPOSIT, deposit}

    expect(actions.deposit(deposit)).toEqual(expectedAction);
});

it('creates an action to withdraw from the balance', () => {
    const withdrawal = 10;

    const expectedAction = { type: constants.WITHDRAW, withdrawal}

    expect(actions.withdraw(withdrawal)).toEqual(expectedAction);
});