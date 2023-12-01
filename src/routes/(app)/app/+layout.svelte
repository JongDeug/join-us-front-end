<script>
    import Header from "$lib/components/+Header.svelte";
</script>

<div class="wrapper">
    <Header isLogin={false}/>
    <div class="contents">
        <slot/>
    </div>
<!--    <div class="footer">-->
<!--    </div>-->
</div>


<style>
    .wrapper {
        /*border: 1px solid red;*/
    }
    .contents {
        /*border: 1px solid blue;*/
        padding: 0 200px;
    }
</style>