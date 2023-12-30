<div class="wrapper">
    <div class="div-left">
        <img src="/user.png" alt="" width="70" height="70">
        <div class="div-description">
            <p>닉네임</p>
            <p>인삿말 입니다만?</p>
        </div>
    </div>
    <div class="div-right">
        <button>팔로우</button>
    </div>
</div>

<style lang="scss">
  .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 17px 0;
    border-bottom: 1px solid black;

    .div-left {
      display: flex;
      align-items: center;

      .div-description {
        margin-left: 10px;
      }
    }

    .div-right {
      button {
        padding: 7px;
        border-radius: 5px;
        background-color: var(--ivory);
      }
    }
  }
</style>