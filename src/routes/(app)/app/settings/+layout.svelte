<div class="wrapper">
    <div class="sidebar">
        <h2>설정</h2>
        <ul>
            <li><a href="">소개 프로필</a></li>
            <li><a href=""></a></li>
            <li><a href="">소개 프로필</a></li>
            <li><a href="">소개 프로필</a></li>
            <li><a href="">소개 프로필</a></li>
        </ul>
    </div>

    <slot/>
</div>

<style lang="scss">
  .wrapper {
    display: flex;

    .sidebar {
      width: 25%;
      margin-right: 20px;
      border-right: 1px solid;
    }
  }
</style>