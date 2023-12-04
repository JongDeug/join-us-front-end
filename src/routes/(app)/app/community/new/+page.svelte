<div class="inner-content">
    <div class="right">
        <form class="create-form">
            <div class="form-title">
                <h2>게시글 생성</h2>
            </div>
            <div class="category">
                <label for="boards">게시판 종류</label>
                <select name="" id="boards">
                    <option value="구인 게시판">구인 게시판</option>
                    <option value="질문 게시판">질문 게시판</option>
                </select>
            </div>
            <div class="title">
                <label for="title">제목</label>
                <input type="text" id="title">
            </div>
            <div class="tag">
                <label for="tag">태그</label>
                <input type="text" id="">
            </div>
            <div class="content">
                <label for="">본문</label>
                <div class="content-container">

                </div>
            </div>
            <div class="btn">
                <a href="/app/" class="cancel-btn">취소</a>
                <button class="confirm-btn">등록</button>
            </div>

        </form>
    </div>

    <div class="clearfix"></div>
</div>

<!-- Footer -->
<div class="footer"></div>
<!-- //Footer -->


<style lang="scss">
  .inner-content {
    padding: 30px 0;
    width: 70%;
    margin: 0 auto;

    .right {
      width: calc(100% - 200px);
      float: right;

      label {
        display: block;
        margin-bottom: 6px;
      }

      .create-form {
        //border: 1px solid black;

        .form-title {
          margin-bottom: 50px;
        }

        .category {
          select {
            width: 100%;
            border-radius: 5px;
            border: 1px solid var(--border-color);
            box-shadow: 1px 1px 0 var(--border-color);
            padding: 12px 10px;
          }
        }

        .title {
          input {
            width: 100%;
            border-radius: 5px;
            border: 1px solid var(--border-color);
            box-shadow: 1px 1px 0 var(--border-color);
            padding: 12px 10px;
          }
        }

        .tag {
          input {
            width: 100%;
            border-radius: 5px;
            border: 1px solid var(--border-color);
            box-shadow: 1px 1px 0 var(--border-color);
            padding: 12px 10px;
          }
        }

        .category, .title, .tag {
          margin-bottom: 30px;
        }

        .content {
          .content-container {
            height: 300px;
            border: 1px solid var(--border-color);
            border-radius: 5px;
            margin-bottom: 30px;
          }
        }

        .btn {
          display: flex;
          justify-content: end;

          .cancel-btn {
            padding: 10px 30px;
            margin-right: 10px;
            @include orange-btn;
            background-color: white;
            color: black;
          }

          .confirm-btn {
            padding: 10px 30px;
            @include orange-btn;
          }
        }
      }
    }

    .clearfix {
      clear: both;
    }
  }

  /* Footer */
  .footer {
    @include footer;
  }
</style>