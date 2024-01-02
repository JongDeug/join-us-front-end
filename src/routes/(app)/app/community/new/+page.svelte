<div class="wrapper">
    <div class="commercial">

    </div>

    <!-- Main -->
    <div class="main">
        <!-- Title -->
        <div class="main-title">
            <h2>게시글 작성</h2>
            프로젝트 팀원을 모집하거나 궁금한 것을 질문해보세요!
        </div>
        <!-- //Title -->

        <!-- Form -->
        <form class="form">
            <div class="form-category">
                <label for="boards">게시판 종류</label>
                <select name="" id="boards">
                    <option value="구인 게시판">구인 게시판</option>
                    <option value="질문 게시판">질문 게시판</option>
                </select>
            </div>
            <div>
                <label for="title">제목</label>
                <input class="form-input" type="text" id="title">
            </div>
            <div>
                <label for="tag">태그</label>
                <input class="form-input" type="text" id="">
            </div>
            <div class="form-content">
                <label for="">본문</label>
                <div class="content-container">
                </div>
            </div>
            <div class="form-btn">
                <a href="/app/" class="cancel-btn">취소</a>
                <button class="confirm-btn">등록</button>
            </div>
        </form>
        <!-- //Form -->
    </div>
    <!-- //Main -->
</div>

<style lang="scss">
  .wrapper {
    display: flex;
    gap: 150px;

    /* Main */
    .main {
      width: 100%;

      /* Title */
      &-title {
        margin-bottom: 50px;
      }

      /* Form */
      .form {
        label {
          display: block;
          margin-bottom: 6px;
        }

        div {
          margin-bottom: 30px;
        }

        /* Post Category */
        &-category {
          select {
            width: 100%;
            border-radius: 5px;
            border: 1px solid var(--border-color);
            box-shadow: 1px 1px 0 var(--border-color);
            padding: 12px 10px;
          }
        }

        &-input {
          width: 100%;
          border-radius: 5px;
          border: 1px solid var(--border-color);
          box-shadow: 1px 1px 0 var(--border-color);
          padding: 12px 10px;
        }

        /* Post Content */
        &-content {
          .content-container {
            height: 300px;
            border: 1px solid var(--border-color);
            border-radius: 5px;
            margin-bottom: 30px;
          }
        }

        /* Buttons */
        &-btn {
          display: flex;
          justify-content: end;
          margin-bottom: 0 !important;

          .cancel-btn {
            padding: 10px 30px;
            margin-right: 10px;
            @include orange-btn;
            background-color: white !important;
            color: black !important;
          }

          .confirm-btn {
            padding: 10px 30px;
            @include orange-btn;
          }
        }
      }
    }
  }
</style>