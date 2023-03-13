<script lang="ts">
  import FormInput from "./FormInput.svelte"

  export let purchasePrice: number
  export let closingCost: number
  export let downPaymentRate: number
  export let interestRate: number
  export let amortizationPeriod: number
  export let monthlyRent: number
  export let vacancyRate: number
  export let propertyTax: number
  export let otherExpenses: number
</script>

<form>
  <div class="form-row mb-3">
    <div class="col">
      <FormInput 
        label="Purchase Price"
        prepend="$"
        bind:value={purchasePrice}
      />
    </div>
    <div class="col">
      <FormInput 
        label="Closing Cost"
        prepend="$"
        bind:value={closingCost}
      />
    </div>
    <div class="col">
      <FormInput 
        label="Down Payment"
        append="%"
        bind:value={downPaymentRate}
      />
    </div>
  </div>

  <div class="form-row mb-3">
    <div class="col">
      <FormInput 
        label="Interest Rate"
        append="%"
        bind:value={interestRate}
      />
    </div>
    <div class="col">
      <FormInput 
        label="Amortization Period"
        append="years"
        bind:value={amortizationPeriod}
      />
    </div>
    <div class="col">
      <FormInput 
        label="Monthly Rent"
        prepend="$"
        bind:value={monthlyRent}
      />
    </div>
  </div>

  <div class="form-row">
    <div class="col">
      <FormInput 
        label="Vacancy Rate"
        append="%"
        bind:value={vacancyRate}
      />
    </div>
    <div class="col">
      <FormInput 
        label="Property Tax"
        prepend="$"
        bind:value={propertyTax}
      />
    </div>
    <div class="col">
      <FormInput 
        label="Other Expenses"
        prepend="$"
        bind:value={otherExpenses}
      />
    </div>
  </div>

</form>