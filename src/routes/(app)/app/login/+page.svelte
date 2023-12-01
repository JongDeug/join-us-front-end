<div class="container">
    <form class="form">
        <div class="title">Welcome,<br><span>have a nice day 😁</span></div>
        <input class="input" name="id" placeholder="Id" type="id">
        <input class="input" name="password" placeholder="Password" type="password">
        <div class="sign-up">
            <a href="#">아이디가 없으신가요?</a>
        </div>
        <button class="button-confirm">확인</button>
    </form>
</div>

<style lang="scss">
  .container {
    border: 1px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;

    //why?
    height: 100vh;

    .form {
      --input-focus: #2d8cf0;
      --font-color: #323232;
      --font-color-sub: #666;
      --bg-color: beige;
      --main-color: black;
      padding: 20px;
      background: lightblue;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      //align-items: center;
      justify-content: center;
      gap: 20px;
      border-radius: 5px;
      border: 2px solid var(--main-color);
      box-shadow: 4px 4px var(--main-color);
      width: 500px;

      .title {
        color: var(--font-color);
        font-weight: 900;
        font-size: 20px;
        margin-bottom: 25px;

        span {
          color: var(--font-color-sub);
          font-weight: 600;
          font-size: 17px;
        }
      }

      .input {
        width: 100%;
        height: 40px;
        border-radius: 5px;
        border: 2px solid var(--main-color);
        background-color: var(--bg-color);
        box-shadow: 4px 4px var(--main-color);
        font-size: 15px;
        font-weight: 600;
        color: var(--font-color);
        padding: 5px 10px;
        outline: none;

        &::placeholder {
          color: var(--font-color-sub);
          opacity: 0.8;
        }

        &:focus {
          border: 2px solid var(--input-focus);
        }
      }

      .sign-up {
        width: 100%;
        text-align: right;
        margin-top: 10px;

        a {
          padding: 10px 10px;
          color: black;
          text-decoration: underline;
        }
      }

      .button-confirm {
        margin: 20px auto 0 auto;
        width: 120px;
        height: 40px;
        border-radius: 5px;
        border: 2px solid var(--main-color);
        background-color: var(--bg-color);
        box-shadow: 4px 4px var(--main-color);
        font-size: 17px;
        font-weight: 600;
        color: var(--font-color);
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background-color: white;
          color: black;
          border: 2px solid black;
          box-shadow: 5px 5px 0px black;
        }

        &:active {
          background-color: white;
          box-shadow: none;
          transform: translateY(4px);
        }
      }
    }
  }
</style>