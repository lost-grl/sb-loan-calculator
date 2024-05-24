describe('payments tests', function() {
    beforeEach(function() {
        billAmtInput.value = 100;
        tipAmtInput.value = 25;

    });

    it('should add current payment to allPayments object', function() {
        
        submitPaymentInfo();

        expect(allPayments[0].billAmt).toEqual(100);

        billAmtInput.value = 250;
        tipAmtInput.value = 50;
        submitPaymentInfo();

        expect(allPayments[1].billAmt).toEqual(250);
    });

    it('should create current payment object', function() {
        submitPaymentInfo();

        expect(curPayment.billAmt).toEqual('100');
    });

    it('should create table row element with input data', function() {
        submitPaymentInfo();

        expect(paymentTbody.innerHTML).not.toBeNull();
    });

    it('should update summary with payment sum', function() {
        submitPaymentInfo();

        billAmtInput.value = 250;
        tipAmtInput.value = 50;
        submitPaymentInfo();

        expect(summaryTds[0].innerHTML).toEqual('$350');
    })

    afterEach(function() {
        billAmtInput.value = '';
        tipAmtInput.value = '';
        paymentTbody.innerHTML = '';
        serverTbody.innerHTML = '';
        paymentId = 0;
        allPayments = {};
      });
})