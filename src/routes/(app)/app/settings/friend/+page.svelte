<script>
    import Friend from "$lib/components/Friend.svelte";
    import Pagination from "$lib/components/Pagination.svelte";
    import {page} from "$app/stores";
    import Tab from "$lib/components/Tab.svelte";

    let selected = "followers";
    let options = $page.data.options.friend;

    $: console.log(selected);
</script>

<div class="wrapper">
    <div class="main-content">
        <!-- Title -->
        <div class="main-content__title">
            <h3>친구</h3>
        </div>

        <!-- Tab -->
        <div class="main-content__tab">
            <Tab bind:selected {options}/>
        </div>

        {#if selected == "followers"}
            <!-- Followers -->
            <Friend/>
            <Friend/>
            <Friend/>
            <Friend/>
            <Pagination/>
        {:else if selected == "following"}
            <!-- Following -->
            <Friend/>
            <Friend/>
            <Pagination/>
        {/if}
    </div>
</div>

<style lang="scss">
  .wrapper {
    .main-content {
      &__title {
        margin-bottom: 30px;
      }

      &__tab {
        display: flex;
        justify-content: right;
        margin-bottom: 30px;
      }
    }
  }
</style>