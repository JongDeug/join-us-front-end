<script>
    import Options from "$lib/components/Options.svelte";
    import Friend from "$lib/components/Friend.svelte";
    import Pagination from "$lib/components/Pagination.svelte";
    import {page} from "$app/stores";

    let selected = "followers";
    let options = $page.data.options.friend;

    $: console.log(selected);
</script>

<div class="wrapper">
    <!-- Title -->
    <div class="title">
        <h3>친구</h3>
    </div>
    <!-- //Title -->

    <!-- Select -->
    <div class="div-select">
        <Options bind:selected {options}/>
    </div>
    <!-- //Select -->

    {#if selected == "followers"}
        <!-- 팔로워 -->
        <Friend/>
        <Friend/>
        <Friend/>
        <Friend/>
        <Pagination/>
        <!-- //팔로워 -->
    {:else if selected == "following"}
        <!-- 팔로잉 -->
        <Friend/>
        <Friend/>
        <Pagination/>
        <!-- //팔로잉 -->
    {/if}
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