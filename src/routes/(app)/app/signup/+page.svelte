<form class="signup-form">
    <div class="title">회원가입</div>
    <div class="greeting">Welcome,<br><span>have a nice day 😁</span></div>
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
        <input class="input" name="password-check" placeholder="Password" type="password-check" id="password-check">
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
        <div class="login">
            <a href="#">이미 회원이신가요?</a>
        </div>
    </div>
    <button class="confirm-btn">확인</button>
</form>


<style lang="scss">

  .signup-form {
    margin: 100px auto 100px auto;
    padding: 20px;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 30px;
    border-radius: 5px;
    border: 2px solid black;
    box-shadow: 4px 4px black;
    width: 600px;

    /* Title */
    .title {
      width: 100%;
      text-align: center;
      font-size: 40px;
      font-weight: 600;
      text-decoration: underline;
      margin-bottom: 10px;
      //color: #323232;
    }

    /* Greeting */
    .greeting {
      font-weight: 900;
      font-size: 20px;
      margin-bottom: 25px;

      span {
        color: var(--font-light);
        font-weight: 600;
        font-size: 17px;
      }
    }

    .input-div {
      //margin-bottom: 25px;
      width: 100%;

      &:last-child {
        margin: 0;
      }

      label {
        display: block;
        margin-bottom: 6px;
      }

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
    .login {
      width: 100%;
      text-align: right;
      margin-top: 20px;

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
      //margin: 20px auto 0 auto;
      margin: 0 auto;
      padding: 8px 40px;
      @include ivory-btn;
    }
  }
</style>