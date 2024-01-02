<script>
    import Header from "$lib/components/Header.svelte";

    /** @type {import('./$types').LayoutData} */
    export let data;
</script>

<div class="wrapper">
    <!-- Navbar -->
    <Header isLogin={true} sections={data.sections}/>
    <!-- //Navbar -->

    <!-- Content -->
    <div class="content">
        <slot/>
    </div>
    <!-- //Content -->

    <!-- Footer -->
    <div class="footer"></div>
    <!-- //Footer -->
</div>

<style lang="scss">
  /* Content */
  .content {
    padding: 30px 0;
    width: 70%;
    margin: 80px auto 0 auto;
    min-height: calc(100vh - 80px);
  }

  /* Footer */
  .footer {
    @include footer;
  }
</style>
