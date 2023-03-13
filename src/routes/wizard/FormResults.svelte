<script lang="ts">
  export let grossRentalIncome: number
  export let netRentalIncome: number
  export let capRate: number
  export let roi: number

  const currency = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });
</script>

<div class="row box">
  <div class="col rboarder">
    <div class="d-flex justify-content-center label">Gross Rental Income</div>
    <div class="d-flex justify-content-center value">{currency.format(grossRentalIncome)}</div>
  </div>
  <div class="col rboarder">
    <div class="d-flex justify-content-center label">Net Rental Income</div>
    <div class="d-flex justify-content-center value">{currency.format(netRentalIncome)}</div>
  </div>
  <div class="col rboarder">
    <div class="d-flex justify-content-center label">Cap Rate</div>
    <div class="d-flex justify-content-center value">{capRate.toFixed(2)}%</div>
  </div>
  <div class="col">
    <div class="d-flex justify-content-center label">ROI</div>
    <div class="d-flex justify-content-center value">{roi.toFixed(2)}%</div>
  </div>
</div>

<style>
  .box {
    background-color: #EBF4FF;
    padding: 1em;
    border-radius: 5px;
    border-style: solid;
    border-color: #c6e0ff;
    border-width: 1px;
  }

  .rboarder {
    border-right: 5px;
    border-right-style: solid;
    border-right-color: #c6e0ff;
    border-right-width: 1px;
  }

  .label {
    font-weight: 600;
    color: #524E7D;
  }

  .value {
    font-weight: 600;
    color: #1A1B40;
    font-size: x-large;
  }
</style>