
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({ amount: 1000, years: 10, rate: 2.5}).toEqual(9.43))
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({ amount: 5000, years: 5, rate: 7.42}).toEqual(100.00))
});


