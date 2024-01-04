<script>
    import Friend from "$lib/components/Friend/Friend.svelte";
    import Pagination from "$lib/components/Pagination.svelte";
    import {page} from "$app/stores";
    import Tab from "$lib/components/Tab.svelte";
    import FriendList from "$lib/components/Friend/FriendList.svelte";
    import FriendRequest from "$lib/components/Friend/FriendRequest.svelte";


</script>

<div class="wrapper">
    <div class="main-content">
        <!-- Friend List -->
        <div class="main-content__friend-list">
            <FriendList/>
        </div>

        <!-- Friend Request -->
        <div class="main-content__friend-request">
            <FriendRequest/>
        </div>
    </div>
</div>

<style lang="scss">
  .wrapper {
    .main-content {
      &__friend-list {
        padding-bottom: 100px;
        border-bottom: 2px solid var(--border-color);
      }
    }
  }
</style>