<script>
    import Options from "$lib/components/Options.svelte";

    let selected = "ask";
    const options = [
        {title: '문의하기', value: 'ask'},
        {title: '내 문의', value: 'myAsk'}
    ]

    $: console.log(selected);
</script>

<div class="wrapper">
    <!-- Title -->
    <div class="title">
        <h3>고객센터</h3>
    </div>
    <!-- //Title -->

    <!-- Select -->
    <div class="div-select">
        <Options bind:selected {options}/>
    </div>
    <!-- //Select -->
</div>

<style lang="scss">
  .wrapper {
    /* Title */
    .title {
      margin-bottom: 30px;
    }

    /* Select */
    .div-select {
      display: flex;
      justify-content: right;
      margin-bottom: 30px;
    }
  }
</style>