<script lang="ts">
  import {calcMortgagePayments, calcGrossRentalIncome} from './calculator'
	import Form from './Form.svelte';
	import FormResults from './FormResults.svelte';

  let purchasePrice = 500000
  let closingCost = 9000
  let downPaymentRate = 20
  let interestRate = 5
  let amortizationPeriod = 30
  let monthlyRent = 2700
  let vacancyRate = 3
  let propertyTax = 1000
  let otherExpenses = 1000


  // Investment 
  $: financingCosts = calcMortgagePayments(
    purchasePrice, 
    downPaymentRate / 100, 
    interestRate / 100,
    amortizationPeriod
  )
  $: downPayment = purchasePrice * (downPaymentRate / 100)
  $: investment = downPayment + closingCost

  // Profits
  $: grossRentalIncome = calcGrossRentalIncome(monthlyRent, vacancyRate / 100)
  $: netRentalIncome = grossRentalIncome - financingCosts

  // Results
  $: roi = (netRentalIncome / investment) * 100
  $: capRate = (netRentalIncome / downPayment) * 100
</script>

<div class="container">
  <div class="mt-4 mb-4">
    <h3>ROI Rental Calculator</h3>
    <p>Estimate how much you can make when buying a rental property</p>
  </div>

  <Form
    bind:purchasePrice={purchasePrice}
    bind:closingCost={closingCost}
    bind:downPaymentRate={downPaymentRate}
    bind:interestRate={interestRate}
    bind:amortizationPeriod={amortizationPeriod}
    bind:monthlyRent={monthlyRent}
    bind:vacancyRate={vacancyRate}
    bind:propertyTax={propertyTax}
    bind:otherExpenses={otherExpenses}
  />
  
  <br/><br/>
  <FormResults {...{
    grossRentalIncome,
    netRentalIncome,
    capRate,
    roi,
  }}/>
</div>