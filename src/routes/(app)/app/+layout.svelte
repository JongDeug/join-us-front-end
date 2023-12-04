<script>
    import Header from "$lib/components/Header.svelte";
</script>

<div class="wrapper">
    <!-- Navbar -->
    <Header isLogin={true}/>
    <!-- //Navbar -->

    <!-- Content -->
    <div class="content">
        <slot/>
    </div>
    <!-- //Content -->
</div>

<style>
    /* Content */
    .content {
        /* navbar 상단 고정했기 때문에 */
        margin-top: 80px;
    }
</style>
