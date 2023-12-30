<!-- Pagination -->
<div class="pagination">
    <!-- Previous -->
    <div class="page-btn">
        <img src="/left.png" alt="" width="26" height="18">
        <span class="previous">이전</span>
    </div>
    <!-- //Previous -->

    <!-- Pagination Numbers -->
    <ul class="page">
        <li class="page-numbers">1</li>
        <li class="page-numbers active">2</li>
        <li class="page-numbers">3</li>
        <li class="page-numbers">4</li>
        <li class="page-numbers">5</li>
        <li class="page-numbers">6</li>
        <li class="page-dots">...</li>
        <li class="page-numbers"> 10</li>
    </ul>
    <div class="page-btn">
        <span class="next">다음</span>
        <img src="/right.png" alt="" width="26" height="18">
    </div>
    <!-- //Pagination Numbers -->
</div>
<!-- //Pagination -->

<style lang="scss">
  /* Pagination */
  .pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;

    /* Previous, Next */
    .page-btn {
      display: flex;
      align-items: center;
      cursor: pointer;

      span {
        font-size: 15px;
        //font-weight: 600;
      }

      .previous {
        padding-left: 5px;
      }

      .next {
        padding-right: 5px;
      }

      &:hover {
        color: var(--focus);
      }
    }

    /* Pagination Numbers*/
    .page {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 7px;
      border: 1px solid var(--border-color);
      background: #ffffff;
      box-shadow: 0 0 2rem rgba(#5a6181, 0.05);

      &-numbers,
      &-dots {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 8px;
        cursor: pointer;
      }

      &-dots {
        color: orange;
        cursor: initial;
      }

      &-numbers {
        //width: 2.6rem;
        //height: 2.6rem;
        width: 45px;
        height: 45px;
        border-radius: 0.4rem;

        &:hover {
          color: orange;
        }

        &.active {
          color: #ffffff;
          background: orange;
          font-weight: 600;
          border: 1px solid orange;
        }
      }
    }
  }
</style>