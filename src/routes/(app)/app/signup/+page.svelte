<!-- Form -->
<form class="form">
<!--    <div class="form-title">JoinUs에 오신것을 환영합니</div>-->
    <div class="form-greeting"><h2>회원가입</h2><br><span>JoinUs에 오신것을 환영합니다. 😁</span></div>
    <div class="form-input">
        <label for="id">아이디</label>
        <input name="id" placeholder="Id" type="id" id="id">
    </div>
    <div class="form-input">
        <label for="password">비밀번호</label>
        <input name="password" placeholder="Password" type="password" id="password">
    </div>
    <div class="form-input">
        <label for="password-check">비밀번호 확인</label>
        <input name="password-check" placeholder="Password" type="password-check"
               id="password-check">
    </div>
    <div class="form-input">
        <label for="email">이메일</label>
        <input name="email" placeholder="Email" type="email" id="email">
    </div>
    <div class="form-input">
        <label for="name">이름</label>
        <input name="name" placeholder="Name" type="name" id="name">
    </div>
    <div class="form-input">
        <label for="nickname">닉네임</label>
        <input name="nickname" placeholder="Nickname" type="nickname" id="nickname">
    </div>
    <div class="form-login">
        <a href="/app/login">이미 회원이신가요?</a>
    </div>
    <button class="confirm-btn">확인</button>
</form>
<!-- //Form -->

<style lang="scss">
  /* Form */
  .form {
    margin: 100px auto 100px auto;
    padding: 20px;
    background: lightblue;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;
    border-radius: 5px;
    border: 2px solid black;
    box-shadow: 4px 4px black;
    width: 600px;

    label {
      display: block;
      margin-bottom: 6px;
    }

    /* Form Title */
    &-title {
      width: 100%;
      text-align: center;
      font-size: 40px;
      font-weight: 600;
      //text-decoration: underline;
      margin-bottom: 10px;
      //color: #323232;
    }

    /* Greeting */
    &-greeting {
      font-weight: 900;
      font-size: 20px;
      margin-bottom: 25px;

      span {
        color: var(--font-light);
        font-weight: 600;
        font-size: 17px;
      }
    }

    /* Input Tag */
    &-input {
      width: 100%;

      input {
        width: 100%;
        height: 50px;
        border-radius: 5px;
        border: 2px solid black;
        background-color: var(--ivory);
        box-shadow: 4px 4px black;
        font-size: 15px;
        font-weight: 600;
        padding: 5px 10px;
        outline: none;

        &::placeholder {
          color: var(--font-light);
          opacity: 0.8;
        }

        &:focus {
          border: 2px solid var(--focus);
        }
      }
    }

    /* Login */
    &-login {
      width: 100%;
      text-align: right;
      margin-top: 10px;

      a {
        padding: 10px 10px;
        color: black;
        text-decoration: underline;

        &:hover {
          color: var(--focus);
        }
      }
    }

    /* Confirm Button */
    .confirm-btn {
      margin: 20px auto 0 auto;
      padding: 8px 40px;
      @include ivory-btn;
    }
  }
</style>