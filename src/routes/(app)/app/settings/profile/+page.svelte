<form class="profile-form" action="">
    <div class="form-title">
        <h3>소개 프로필</h3>
    </div>

    <div class="top">
        <div class="top-left">
            <div class="input-div">
                <label for="nickname">닉네임</label>
                <input class="input" name="nickname" placeholder="Nickname" type="nickname" id="nickname" disabled>
            </div>
            <div class="input-div">
                <label for="email">인삿말</label>
                <input class="input" name="email" placeholder="Email" type="email" id="email">
            </div>
            <div class="input-div">
                <label for="email">보유 기술</label>
                <input class="input" name="email" placeholder="Email" type="email" id="email">
            </div>
        </div>
        <div class="top-right">
            사진
        </div>
    </div>

    <div class="bottom">
        <div class="input-div">
            <label for="email">자유 양식</label>
            <textarea class="input" name="email" placeholder="Email" id="email"></textarea>
        </div>

        <div class="btn-div">
            <button class="edit-btn">수정</button>
        </div>
    </div>

</form>

<style lang="scss">
  .profile-form {

    .form-title {
      margin-bottom: 30px;
    }

    .top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 30px;

      &-left {
        width: 60%;

        .input-div {
          .input {
            width: 100%;
          }
        }
      }

      &-right {
        width: 35%;
        border: 1px solid;
      }
    }

    .bottom {
      .input-div {
        .input {
          width: 100%;
          resize: none;
          height: 300px;
        }
      }
    }


    .btn-div {
      display: flex;
      justify-content: right;

      .edit-btn {
        padding: 10px 30px;
        @include orange-btn;
      }
    }
  }

  /* 공통 */
  .input-div {
    margin-bottom: 30px;

    label {
      display: block;
      margin-bottom: 6px;
    }

    .input {
      border-radius: 5px;
      border: 1px solid var(--border-color);
      box-shadow: 1px 1px 0 var(--border-color);
      padding: 12px 10px;
    }
  }
</style>