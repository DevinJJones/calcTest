export function calcMortgagePayments(purchasePrice: number, downPaymentRate: number, interestRate: number, amortizationPeriod: number): number {
  let downPayment: number = purchasePrice * downPaymentRate
  let principal: number = purchasePrice - downPayment
  let monthlyInterest: number = interestRate / 12
  let numMonths: number = amortizationPeriod * 12

  let monthlyPayments: number = (principal * monthlyInterest * (1+monthlyInterest)**numMonths) / ((1+monthlyInterest)**numMonths - 1)
  return monthlyPayments * 12
}

export function calcGrossRentalIncome(monthlyRent: number, vacancyRate: number): number {
  return monthlyRent * 12 * (1 - vacancyRate)
}