<script>
    let deleteCheckbox = false;

</script>

<div class="wrapper">
    <div class="form-title">
        <h3>회원 정보</h3>
    </div>

    <form class="account-form" action="">
        <div class="input-div">
            <label for="id">아이디</label>
            <input class="input" name="id" placeholder="Id" type="id" id="id">
        </div>
        <div class="input-div">
            <label for="password">비밀번호</label>
            <input class="input" name="password" placeholder="Password" type="password" id="password">
        </div>
        <div class="input-div">
            <label for="password-check">비밀번호 확인</label>
            <input class="input" name="password-check" placeholder="Password" type="password-check"
                   id="password-check">
        </div>
        <div class="input-div">
            <label for="email">이메일</label>
            <input class="input" name="email" placeholder="Email" type="email" id="email">
        </div>
        <div class="input-div">
            <label for="name">이름</label>
            <input class="input" name="name" placeholder="Name" type="name" id="name">
        </div>
        <div class="input-div">
            <label for="nickname">닉네임</label>
            <input class="input" name="nickname" placeholder="Nickname" type="nickname" id="nickname">
        </div>
        <div class="btn-div">
            <button class="edit-btn">수정</button>
        </div>
    </form>


    <div class="delete">
        <div class="delete-title">
            <h3>계정삭제</h3>
        </div>

        <div class="delete-div">
            <div class="checkbox">
                <input
                        type="checkbox"
                        id="subscribeNews"
                        name="subscribe"
                        value="newsletter"
                        bind:checked={deleteCheckbox}
                />
                <label for="subscribeNews">정말 계정을 삭제하시겠습니까?</label>
            </div>

            <button class:checked={deleteCheckbox}>회원탈퇴</button>
        </div>
    </div>
</div>

<style lang="scss">
  .wrapper {


    .form-title {
      margin-bottom: 30px;
    }


    .account-form {
      width: 70%;
      padding-bottom: 20px;
      margin-bottom: 10px;
      border-bottom: 1px solid;

      .input-div {
        margin-bottom: 30px;

        label {
          display: block;
          margin-bottom: 6px;
        }

        .input {
          width: 100%;
          border-radius: 5px;
          border: 1px solid var(--border-color);
          box-shadow: 1px 1px 0 var(--border-color);
          padding: 12px 10px;
        }
      }

      .btn-div {
        display: flex;
        width: 100%;
        justify-content: right;

        .edit-btn {
          padding: 10px 30px;
          @include orange-btn;
        }
      }
    }


    .delete {
      width: 70%;

      &-title {
        margin: 30px 0;
      }

      &-div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .checkbox {
          padding: 6px;

          input {
            transform: scale(2);
            margin-right: 10px;
          }
        }

        button {
          border-radius: 5px;
          padding: 10px 20px;
          background-color: rgba(255, 0, 0, 0.3);
          color: white;
          border: 0;
        }

        .checked {
          background-color: rgb(255, 0, 0);
        }
      }
    }
  }


</style>