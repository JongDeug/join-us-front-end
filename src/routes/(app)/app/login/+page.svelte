<div class="inner-content">
    <form class="login-form">
        <div class="title">Login</div>
        <div class="greeting">Welcome,<br><span>have a nice day 😁</span></div>
        <input class="input" name="id" placeholder="Id" type="id">
        <input class="input" name="password" placeholder="Password" type="password">
        <div class="sign-up">
            <a href="#">아이디가 없으신가요?</a>
        </div>
        <button class="confirm-btn">확인</button>
    </form>
</div>

<style lang="scss">
  .inner-content{
    display: flex;
    justify-content: center;
    align-items: center;

    padding-top: 8%;
    //why?
    //height: 100vh;

    .login-form {
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

      padding: 20px;
      background: white;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      //align-items: center;
      justify-content: center;
      gap: 20px;
      border-radius: 5px;
      border: 2px solid black;
      box-shadow: 4px 4px black;
      width: 500px;

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

      /* Id, Pw */
      .input {
        width: 100%;
        height: 40px;
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

      /* Sign up */
      .sign-up {
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
  }
</style>