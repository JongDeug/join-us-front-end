<!-- Form -->
<form class="form">
    <div class="form-greeting"><h2>로그인</h2><br><span>JoinUs에 오신것을 환영합니다. 😁</span></div>
    <input class="form-input" name="id" placeholder="Id" type="id">
    <input class="form-input" name="password" placeholder="Password" type="password">
    <div class="form-signup">
        <a href="/app/signup">아이디가 없으신가요?</a>
    </div>
    <button class="form-confirmBtn">확인</button>
</form>
<!-- //Form -->


<style lang="scss">
  /* Form */
  .form {
    margin: 100px auto 0 auto;
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

    /* Form Title */
    &-title {
      width: 100%;
      text-align: center;
      font-size: 40px;
      font-weight: 600;
      text-decoration: underline;
      margin-bottom: 10px;
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

    /* Sign up */
    &-signup {
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
    &-confirmBtn {
      margin: 20px auto 0 auto;
      padding: 8px 40px;
      @include ivory-btn;
    }
  }
</style>