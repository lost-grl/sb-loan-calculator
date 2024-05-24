describe('helpers test', function() {
    beforeEach(function() {
        billAmtInput.value = 0;
        tipAmtInput.value = 0;
    });

    it('should add all payments of a certain type together', function() {
        billAmtInput.value = 100;
        tipAmtInput.value = 25;
        submitPaymentInfo();

        billAmtInput.value = 200;
        tipAmtInput.value = 40;
        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt').toEqual(65));
    });

    it('should calculate the tip percentage', function() {
        expect(calculateTipPercent(100, 25)).toEqual(25);
        expect(calculateTipPercent(200, 40)).toEqual(20);
    });

    it('should add a value to a row in the Payment table', function() {
        let newTr = document.createElement('tr');
        appendTd(newTr, '$500');
        expect(newTr.children.length).toEqual(1);
    });
    
});