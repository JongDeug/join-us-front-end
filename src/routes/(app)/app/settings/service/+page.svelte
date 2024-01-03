<script>
    import Options from "$lib/components/Tab.svelte";
    import Pagination from "$lib/components/Pagination.svelte";
    import Friend from "$lib/components/Friend.svelte";

    let selected = "ask";
    const options = [
        {title: '문의하기', value: 'ask'},
        {title: '내 문의', value: 'myAsk'}
    ]

    $: console.log(selected);
</script>

<div class="wrapper">
    <div class="main-content">
        <div class="main-content__title">
            <!-- Title -->
            <div class="title">
                <h3>고객센터</h3>
            </div>
            <!-- //Title -->
        </div>

        <div class="main-content__select">
            <Options bind:selected {options}/>
        </div>


    </div>
</div>


<style lang="scss">

  /* Layout */
  .wrapper {
    .main-content {
      //&__title {}

      &__select {
        display: flex;
        justify-content: right;
        margin-bottom: 30px;
      }
    }

  }

  //-------------------------------------------------------

  /* Title */
  .title {
    margin-bottom: 30px;
  }

</style>