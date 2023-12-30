<script>
    import Post from "$lib/components/Post.svelte";
    import Pagination from "$lib/components/Pagination.svelte";
    import MyComment from "$lib/components/MyComment.svelte";
    import Options from "$lib/components/Options.svelte";

    let selected = "post";
    const options = [
        {title: '게시글', value: 'post'},
        {title: '댓글', value: 'comment'},
        {title: '개인 개발 노트', value: 'note'}
    ]

    $: console.log(selected);
</script>

<div class="wrapper">
    <div class="title">
        <h3>활동 내역</h3>
    </div>

    <div class="div-select">
        <Options bind:selected {options}/>
    </div>

    {#if selected == "post"}
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Pagination/>

    {:else if selected == "comment"}
        <!--    댓글-->
        <MyComment/>
        <MyComment/>
        <MyComment/>
        <Pagination/>
    {:else if selected == "note"}
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