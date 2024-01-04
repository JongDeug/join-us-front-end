<script>
    import Friend from "$lib/components/Friend/Friend.svelte";
</script>

<div class="friend-request">
    <div class="friend-request__title">
        <h3>팔로우 요청</h3>
    </div>

    <!-- 컴포넌트로 변환할 것 or Friend 컴포넌트를 개조 -->
    <div class="friend">
        <div class="col1">
            <img src="/user.png" alt="" width="70" height="70">
            <div class="friend__description">
                <p>닉네임</p>
                <p>인삿말 입니다만?</p>
            </div>
        </div>

        <div class="col2">
            <button class="friend__btn">확인</button>
            <button class="friend__btn friend__btn--remove">삭제</button>
        </div>
    </div>
</div>

<style lang="scss">
    .friend-request {
      margin-top: 30px;
      &__title {
        margin-bottom: 30px;
      }
    }


    .friend {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 17px 0;
      border-bottom: 2px solid var(--border-color);

      .col1 {
        display: flex;
        align-items: center;
      }

      &__description {
        margin-left: 10px;
      }

      &__btn {
        padding: 7px;
        border-radius: 5px;
        background-color: var(--ivory);

        &--remove {
          background-color: white !important;
        }
      }
    }
</style>