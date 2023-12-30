<script>
    import Options from "$lib/components/Options.svelte";
    import Friend from "$lib/components/Friend.svelte";
    import Pagination from "$lib/components/Pagination.svelte";

    let selected = "followers";
    const options = [
        {title: '팔로워', value: 'followers'},
        {title: '팔로잉', value: 'following'}
    ]

    $: console.log(selected);
</script>

<div class="wrapper">
    <div class="title">
        <h3>친구</h3>
    </div>

    <div class="div-select">
        <Options bind:selected {options}/>
    </div>

    {#if selected == "followers"}
        <Friend/>
        <Friend/>
        <Friend/>
        <Friend/>
        <Pagination/>
    {:else if selected == "following"}
        <Friend/>
        <Friend/>
        <Pagination/>
    {/if}
</div>

<style lang="scss">
  .wrapper {
    .title {
      margin-bottom: 30px;
    }

    .div-select {
      display: flex;
      justify-content: right;
      margin-bottom: 30px;
    }
  }
</style>