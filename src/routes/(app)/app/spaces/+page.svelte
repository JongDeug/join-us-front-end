<div class="inner-content">
    <div class="spaces">
        <div class="top">
            <div class="select">
                <div class="option">
                    <input class="input" type="radio" name="btn" value="option1" checked>
                    <div class="btn">
                        <span class="span">최근 접속</span>
                    </div>
                </div>
                <div class="option">
                    <input class="input" type="radio" name="btn" value="option2">
                    <div class="btn">
                        <span class="span">내가 만든 공간</span>
                    </div>
                </div>
            </div>

            <!-- Search -->
            <div class="search">
                <svg viewBox="0 0 24 24" aria-hidden="true" class="icon">
                    <g>
                        <path
                                d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                        ></path>
                    </g>
                </svg>
                <input class="input" type="search" placeholder="검색하기"/>
            </div>
            <!-- //Search -->
        </div>
    </div>
</div>

<style lang="scss">
  .inner-content {
    padding: 30px 0;
    width: 70%;
    margin: 0 auto;

    .spaces {
      //border: 1px solid;

      .top {
        display: flex;
        justify-content: flex-end;

        .select {
          margin-right: 20px;
          position: relative;
          width: 260px;
          height: 36px;
          background-color: var(--ivory);
          border: 2px solid var(--font-light);
          border-radius: 34px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          box-shadow: 4px 4px var(--font-light);

          .option {
            //width: 80.5px;
            width: 45%;
            height: 28px;
            position: relative;
            top: 2px;
            left: 2px;

            .input {
              width: 100%;
              height: 100%;
              position: absolute;
              left: 0;
              top: 0;
              appearance: none;
              cursor: pointer;
            }

            .input:checked + .btn {
              background-color: var(--font-light);

              span {
                color: white;
              }
            }

            .btn {
              width: 100%;
              height: 100%;
              background-color: var(--ivory);
              border-radius: 50px;
              display: flex;
              justify-content: center;
              align-items: center;

            }
          }

        }

        /* Search */
        .search {
          display: flex;
          line-height: 28px;
          align-items: center;
          position: relative;
          width: 250px;

          .icon {
            position: absolute;
            left: 1rem;
            fill: #9e9ea7;
            width: 1rem;
            height: 1rem;
          }

          .input {
            width: 100%;
            height: 40px;
            line-height: 28px;
            padding-left: 2.5rem;
            border: 2px solid transparent;
            border-radius: 8px;
            outline: none;
            background-color: #f3f3f4;
            color: #0d0c22;
            transition: 0.3s ease;

            &::placeholder {
              color: #9e9ea7;
            }

            &:focus,
            &:hover {
              outline: none;
              border-color: rgba(247, 127, 0, 0.4);
              background-color: #fff;
              box-shadow: 0 0 0 4px rgb(247 127 0 / 10%);
            }
          }
        }
      }
    }


  }
</style>