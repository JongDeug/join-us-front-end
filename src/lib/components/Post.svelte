<div class="post">
    <!-- Post Top Info -->
    <div class="post-top-info">
        <div class="user">김종환</div>
        <div class="days-ago">3일 전</div>
    </div>
    <!-- //Post Top Info -->

    <!-- Post Content -->
    <div class="post-content">
        <div class="title">
            <a href="/app/community/detail">제목입니다.</a>
        </div>
        <div class="detail">
            <a href="/app/community/detail">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam architecto consectetur, debitis,
                dicta dolore error inventore quam quas, quis quisquam ratione repellat repellendus rerum vel.
                Consectetur
                nam nihil praesentium!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci assumenda at commodi
                doloremque eligendi ex in laboriosam, laborum, magni nulla odio porro quae ratione sequi tempore tenetur
                vitae?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus ad adipisci assumenda at commodi
                doloremque eligendi ex in laboriosam, laborum, magni nulla odio porro quae ratione sequi tempore tenetur
                vitae?
            </a>
        </div>
    </div>
    <!-- //Post Content -->

    <!-- Post Bottom Info -->
    <div class="post-bottom-info">
        <div class="tag">
            <span class="tag-title">태그</span>
            #뭐 #야 #이 #거
        </div>

        <div class="tiny-info">
            <img src="/views.png" alt="" width="20" height="20">
            <span>32</span>
            <img src="/likes.png" alt="" width="20" height="20">
            <span>32</span>
            <img src="/comments.png" alt="" width="20" height="20">
            <span>32</span>
        </div>
    </div>
    <!-- //Post Bottom Info -->
</div>

<style lang="scss">
  .post {
    padding: 17px 0;
    border-bottom: 2px solid var(--border-color);

    &-top-info {
      display: flex;
      align-items: center;

      .user {
        &:after {
          content: "·";
          display: inline-block;
          padding: 0 10px;
        }
      }
    }

    .post-content {
      padding-bottom: 10px;

      .title {
        font-size: 20px;
        font-weight: 600;
        padding: 10px 0;
      }

      .detail {
        height: 40px;
        font-size: 0.9em;
        line-height: 1.3;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .title, .detail {
        a {
          color: black;

          &:hover {
            color: var(--focus);
          }
        }
      }
    }

    &-bottom-info {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .tag-title {
        display: inline-block;
        border: 1px solid lightblue;
        background-color: #c3d6ec;
        border-radius: 3px;
        padding: 0px 6px;
        color: var(--focus);
      }

      .tiny-info {
        display: flex;
        font-size: 15px;
        //justify-content: space-around;
        align-items: center;
        //width: 100px;

        span {
          padding: 0 10px 0 4px;
        }
      }
    }
  }
</style>