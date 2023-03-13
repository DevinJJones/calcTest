<script lang="ts">
  export let label: string
  export let value: number
  export let prepend: string = ""
  export let append: string = ""

  $: id = label.toLowerCase().replace(/\s/g, "")
</script>

<label style="font-weight:600" for={id}>{label}</label>
<div class="input-group">
  {#if prepend}
    <div class="input-group-prepend">
      <div class="input-group-text">{prepend}</div>
    </div>
  {/if}
  <input type="number" class="form-control" id={id} bind:value={value}>
  {#if append}
  <div class="input-group-append">
    <div class="input-group-text">{append}</div>
  </div>
{/if}
</div>