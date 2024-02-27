require ( './helpers.js' );

describe('Fix the Scope', function() {
  describe('declare customerName to be bob in global scope', function() {
    it('returns the customerName', function() {
      expect(window.customerName).to.equal('bob');
    });
  });

  describe('upperCaseCustomerName()', function() {
    it('modifies the customerName variable', function() {
      expect(window.customerName).to.equal('bob');

      upperCaseCustomerName();

      expect(window.customerName).to.equal('BOB');
    });
  });
  describe('setBestCustomer()', function() {
    it('should set the value of bestCustomer to "not bob"', function() {
      setBestCustomer();
      expect(bestCustomer).to.equal('not bob');
    });
  });
  
  describe('overwriteBestCustomer()', function() {
    it('should overwrite the value of bestCustomer with "maybe bob"', function() {
      overwriteBestCustomer('maybe bob');
      expect(bestCustomer).to.equal('maybe bob');
    });
  });

  describe('changeLeastFavoriteCustomer()', function() {
    it('unsuccessfully tries to reassign the least favorite customer', function() {
      expect(changeLeastFavoriteCustomer).to.throw('Assignment to constant variable.');
    });
  });
});
