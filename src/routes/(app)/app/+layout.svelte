<script>
    import Header from "$lib/components/Header.svelte";
</script>

<div class="wrapper">
    <!-- Navbar -->
    <Header isLogin={true}/>
    <!-- //Navbar -->

    <!-- Content -->
    <div class="content">
        <div class="inner-content">
            <slot/>
        </div>
    </div>
    <!-- //Content -->

    <!-- Footer -->
    <div class="footer"></div>
    <!-- //Footer -->
</div>

<style lang="scss">
  /* Content */
  .content {
    /* navbar 상단 고정했기 때문에 */
    margin-top: 80px;

    .inner-content {
      padding: 30px 0;
      width: 70%;
      margin: 0 auto;
      min-height: calc(100vh - 80px);
    }
  }

  /* Footer */
  .footer {
    @include footer;
  }
</style>
