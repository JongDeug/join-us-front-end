<script>
    import Friend from "$lib/components/Friend.svelte";
</script>

<div class="friend-request">
    <div class="friend-request__title">
        <h3>팔로우 요청</h3>
    </div>

    <Friend/>

</div>

<style lang="scss">
    .friend-request {
      margin-top: 30px;
      &__title {
        margin-bottom: 30px;
      }
    }
</style>