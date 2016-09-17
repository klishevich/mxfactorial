import { transactionAmountSelector, newTransactionSelector } from 'selectors/transaction/new-transaction';

describe('transaction selector', () => {

  describe('#transactionAmountSelector', () => {
    it('should return correct amount', () => {
      const sampleState = {
        transaction_item: [
          { value: 1, quantity: 2 },
          { value: 2, quantity: 3 }
        ]
      };
      transactionAmountSelector(sampleState).should.equal(8);
    });
  });

  describe('#newTransactionSelector', () => {
    it('should return correct post value', () => {
      const transaction_item = [
        {
          name: 'chivas',
          value: 100,
          quantity: 1
        }
      ];
      const state = {
        auth: {
          user: {
            account: 'Brad'
          }
        },
        cr_account: 'OOka',
        transaction_item
      };
      const expectedResult = {
        db_author: 'Brad',
        cr_author: 'OOka',
        db_latlng: '0,0',
        cr_latlng: '0,0',
        transaction_item
      };
      newTransactionSelector(state).should.eql(expectedResult);
    });
  });

});
