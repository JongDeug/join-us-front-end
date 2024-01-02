<script>
    import Post from "$lib/components/Post.svelte";
    import Pagination from "$lib/components/Pagination.svelte";
    import MyComment from "$lib/components/MyComment.svelte";
    import Options from "$lib/components/Options.svelte";
    import {page} from "$app/stores";

    let selected = "post";
    let options = $page.data.options.activity

    $: console.log(selected);
</script>

<div class="wrapper">
    <!-- Title -->
    <div class="title">
        <h3>활동 내역</h3>
    </div>
    <!-- //Title -->

    <!-- Select -->
    <div class="div-select">
        <Options bind:selected {options}/>
    </div>
    <!-- //Select -->

    {#if selected == "post"}
        <!-- 게시글 -->
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Pagination/>
        <!-- //게시글 -->
    {:else if selected == "comment"}
        <!-- 댓글 -->
        <MyComment/>
        <MyComment/>
        <MyComment/>
        <Pagination/>
        <!-- //댓글 -->
    {:else if selected == "note"}
        <!-- 개인 개발 노트 -->
        <!-- //개인 개발 노트 -->
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