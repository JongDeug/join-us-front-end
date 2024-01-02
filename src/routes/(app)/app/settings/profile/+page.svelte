<div class="wrapper">
    <!-- Title -->
    <div class="title">
        <h3>소개 프로필</h3>
    </div>
    <!-- //Title -->

    <!-- Form -->
    <form class="form">
        <div class="form-top">
            <!-- Input -->
            <div class="input-div">
                <div>
                    <label for="nickname">닉네임</label>
                    <input class="input" name="nickname" placeholder="Nickname" type="nickname" id="nickname" disabled>
                </div>
                <div>
                    <label for="email">인삿말</label>
                    <input class="input" name="email" placeholder="Email" type="email" id="email">
                </div>
                <div>
                    <label for="email">보유 기술</label>
                    <input class="input" name="email" placeholder="Email" type="email" id="email">
                </div>
            </div>
            <!-- //Input -->

            <!-- Profile -->
            <div class="profile-div">
                사진
            </div>
            <!-- //Profile -->
        </div>

        <div class="form-bottom">
            <!-- Textarea -->
            <div class="textarea-div">
                <label for="email">자유 양식</label>
                <textarea class="textarea" name="email" placeholder="Email" id="email"></textarea>
            </div>
            <!-- //Textarea -->

            <!-- Confirm Button -->
            <div class="btn-div">
                <button class="edit-btn">수정</button>
            </div>
            <!-- //Confirm Button -->
        </div>
    </form>
    <!-- //Form -->
</div>

<style lang="scss">
  .wrapper {
    /* Title */
    .title {
      margin-bottom: 30px;
    }

    .form {
      /* 공통 */
      label {
        display: block;
        margin-bottom: 6px;
      }

      .input, .textarea {
        border-radius: 5px;
        border: 1px solid var(--border-color);
        box-shadow: 1px 1px 0 var(--border-color);
        padding: 12px 10px;
      }

      &-top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;

        /* Input */
        .input-div {
          width: 60%;

          div {
            margin-bottom: 30px;

            &:last-child {
              margin: 0 !important;
            }

            .input {
              width: 100%;
            }
          }
        }

        /* Profile */
        .profile-div {
          width: 35%;
          border: 1px solid;
        }
      }

      &-bottom {
        /* Textarea */
        .textarea-div {
          .textarea {
            width: 100%;
            resize: none;
            height: 300px;
          }
        }

        /* Confirm Button */
        .btn-div {
          display: flex;
          justify-content: right;

          .edit-btn {
            padding: 10px 30px;
            margin-top: 10px;
            @include orange-btn;
          }
        }
      }
    }
  }
</style>