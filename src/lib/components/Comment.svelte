<div class="comment">
    <div class="comment-left">
        <div class="comment-info">
            <img class="user-profile" src="" alt="유저 프로필 사진">
            <div class="user-detail">
                <h4>김종환</h4>
                <span>2시간 전</span>
            </div>
        </div>
        <div class="comment-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci autem beatae blanditiis eos
            exercitationem expedita illum iusto libero mollitia necessitatibus optio pariatur quae quaerat quam quasi,
            quia quidem ratione?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque corporis deleniti expedita facere id illum
            laudantium magni molestias necessitatibus odit perspiciatis porro praesentium quia reiciendis sed, soluta
            suscipit vitae voluptatibus.
        </div>
        <div class="reply">
            <span>댓글쓰기</span>
        </div>
    </div>

    <div class="comment-right">
        <button on:click={() => console.log('hi')}>
            <img src="/arrow-up.png" alt="" width="35" height="35">
        </button>
        <span>0</span>
        <button class="arrow-down">
            <img src="/arrow-down.png" alt="" width="35" height="35">
        </button>
    </div>
</div>

<style lang="scss">
  .comment {
    display: flex;
    border-bottom: 2px solid var(--border-color);
    min-height: 300px;
    padding: 20px 0;


    &-left {
      .comment-info {
        display: flex;
        margin-bottom: 10px;

        .user-profile {
          width: 60px;
          border: 1px solid;
          margin-right: 10px;
        }

        .user-detail {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
        }
      }

      .reply {
        margin-top: 20px;
        text-align: right;
      }
    }

    &-right {
      @include likes;
    }
  }
</style>