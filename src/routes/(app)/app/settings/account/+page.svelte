<script>
    let deleteCheckbox = false;

</script>

<div class="wrapper">
    <!-- Account Form -->
    <form class="account-form" action="">
        <!-- Account Form Title -->
        <div class="account-form-title">
            <h3>회원 정보</h3>
        </div>
        <!-- //Account Form Title -->

        <!-- Account Form Input -->
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
        <!-- //Account Form Input -->

        <!-- Edit Button -->
        <div class="editBtn-div">
            <button class="edit-btn">수정</button>
        </div>
        <!-- //Edit Button -->
    </form>
    <!-- //Account Form -->

    <!-- Delete Account -->
    <div class="delete-account">
        <!-- Delete Account Title -->
        <div class="delete-account-title">
            <h3>계정삭제</h3>
        </div>
        <!-- //Delete Account Title -->

        <!-- Delete Account Content -->
        <div class="delete-account-div">
            <!-- Delete Account CheckBox -->
            <div class="checkbox">
                <input
                        type="checkbox"
                        id="delete"
                        name="subscribe"
                        value="newsletter"
                        bind:checked={deleteCheckbox}
                />
                <label for="delete">정말 계정을 삭제하시겠습니까?</label>
            </div>
            <!-- //Delete Account CheckBox -->

            <!-- Delete Account Button -->
            <button class:checked={deleteCheckbox}>회원탈퇴</button>
            <!-- //Delete Account Button -->
        </div>
        <!-- //Delete Account Content -->
    </div>
</div>

<style lang="scss">
  .wrapper {
    /* Account Form */
    .account-form {
      width: 70%;
      padding-bottom: 20px;
      margin-bottom: 10px;
      border-bottom: 2px solid var(--border-color);

      /* Account Form Title */
      &-title {
        margin-bottom: 30px !important;
      }

      /* Account Form Input */
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

      /* Edit Button */
      .editBtn-div {
        display: flex;
        width: 100%;
        justify-content: right;

        .edit-btn {
          padding: 10px 30px;
          @include orange-btn;
        }
      }
    }

    /* Delete Account */
    .delete-account {
      width: 70%;

      /* Delete Account Title */
      &-title {
        margin: 30px 0;
      }

      /* Delete Account Content */
      &-div {
        display: flex;
        justify-content: space-between;
        align-items: center;

        /* Delete Account Checkbox */
        .checkbox {
          padding: 6px;

          input {
            transform: scale(2);
            margin-right: 10px;
          }
        }

        /* Delete Account Button */
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