<script>
    import Post from "$lib/components/Post.svelte";
    import {fly} from 'svelte/transition';
    import clickOutside from "$lib/ts/clickOutside";

    let whichBoard = true; // 구인 게시판(true), 질문 게시판(false) 선택
    let clickSort = false; // 정렬 메뉴 표시
</script>

<!-- Content -->
<div class="inner-content">
    <div class="right">
        <!-- Top -->
        <div class="top">
            <div class="top-title">
                {#if whichBoard}
                    <span>구인 게시판</span><br>
                    프로젝트를 함께할 동료를 구하는 공간입니다.
                {:else}
                    <span>질문 게시판</span><br>
                    무엇이든 질문할 수 있는 공간입니다.
                {/if}
            </div>
        </div>
        <!-- //Top -->

        <!-- Middle -->
        <div class="middle">
            <!-- Write Button -->
            <a href="/app/community/new" class="write-btn">
                <img src="/write.png" alt="" width="15" height="15">
                <span>작성하기</span>
            </a>
            <!-- //Write Button -->

            <!-- Which Board -->
            <div class="category">
                <ul>
                    <li>
                        <button class="{whichBoard ? 'recruit' : ''}" on:click={() => whichBoard=true}>구인 게시판</button>
                    </li>
                    <li>
                        <button class="{whichBoard ? '' : 'question'}" on:click={() => whichBoard=false}>질문 게시판</button>
                    </li>
                </ul>
            </div>
            <!-- //Which Board -->

            <!-- Sort Button -->
            <div class="sort" use:clickOutside={() => clickSort = false}>
                <!--            특정 영역 제외 클릭 시 닫기-->
                <button class="sort-btn" on:click={(e) => clickSort = !clickSort}>
                    <img src="/sort.png" alt="" width="16" height="16">
                    <span>정렬</span>
                </button>

                {#if clickSort}
                    <div class="sort-menu" transition:fly={{duration: 200}}>
                        <ul>
                            <li>최신순</li>
                            <li>답변순</li>
                            <li>추천순</li>
                            <li>조회순</li>
                        </ul>
                    </div>
                {/if}
            </div>
            <!-- //Sort Button -->
        </div>
        <!-- //Middle -->

        <!-- Notice Board -->
        <div class="notice-board">
            <!-- Notice Board Top -->
            <div class="notice-board-top">
                <!-- Refresh Button -->
                <div class="refresh-btn">
                    <img src="/refresh.png" alt="" width="20" height="20">
                </div>
                <!-- // Refresh Button -->

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
            <!-- //Notice Board Top -->

            <!-- Posts -->
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <!-- //Posts -->
        </div>
        <!-- //Notice Board -->

        <!-- Pagination -->
        <div class="pagination">
            <!-- Previous -->
            <div class="page-btn">
                <img src="/left.png" alt="" width="26" height="18">
                <span class="previous">이전</span>
            </div>
            <!-- //Previous -->

            <!-- Pagination Numbers -->
            <ul class="page">
                <li class="page-numbers">1</li>
                <li class="page-numbers active">2</li>
                <li class="page-numbers">3</li>
                <li class="page-numbers">4</li>
                <li class="page-numbers">5</li>
                <li class="page-numbers">6</li>
                <li class="page-dots">...</li>
                <li class="page-numbers"> 10</li>
            </ul>
            <div class="page-btn">
                <span class="next">다음</span>
                <img src="/right.png" alt="" width="26" height="18">
            </div>
            <!-- //Pagination Numbers -->
        </div>
        <!-- //Pagination -->
    </div>
    <div class="clearfix"></div>
</div>
<!-- //Content -->

<!-- Footer -->
<div class="footer"></div>
<!-- //Footer -->

<style lang="scss">
  /* Content */
  .inner-content {
    padding: 30px 0;
    width: 70%;
    margin: 0 auto;

    .right {
      width: calc(100% - 200px);
      float: right;

      /* Top */
      .top {
        width: 100%;
        margin-bottom: 30px;

        &-title {
          padding: 20px 40px;
          border: 2px solid var(--border-color);
          border-radius: 5px;

          span {
            font-size: 20px;
            font-weight: 600;
          }
        }
      }

      /* Middle */
      .middle {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 30px;
        border-bottom: 2px solid var(--border-color);

        /* Write Button */
        .write-btn {
          padding: 8px 20px;
          @include orange-btn;

          // 이미지 세로 중앙정렬
          img {
            display: inline-block;
            vertical-align: middle;
            margin-right: 1px;
          }
        }

        /* Which Board */
        .category {
          ul {
            display: flex;
            justify-content: center;
            align-items: center;

            li {
              //padding: 0 25px;

              button {
                background: white;
                border: 0;
                color: black;
                font-weight: 600;
                cursor: pointer;
                padding: 10px 25px;

                &:hover {
                  color: var(--focus);
                }
              }

              .recruit, .question {
                text-decoration: underline;


              }
            }
          }
        }

        /* Sort Button */
        .sort {
          position: relative;

          .sort-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 8px 20px;
            font-size: 17px;

            border-radius: 5px;
            border: 1px solid var(--border-color);
            box-shadow: 1px 1px 0 var(--border-color);
            background-color: white;
            font-weight: 600;
            color: var(--font-color);
            cursor: pointer;
            transition: all 0.3s ease;

            span {
              margin-left: 5px;
            }

            &:hover {
              border: 1px solid black;
            }
          }

          .sort-menu {
            border: 1px solid var(--border-color);
            box-shadow: 1px 1px 0 var(--border-color);
            color: var(--font-light);
            margin-top: 10px;
            padding: 15px 15px;
            position: absolute;
            top: 100%;
            left: 0;
            background-color: white;
            width: 100%;
            border-radius: 5px;
            z-index: 1;

            ul li {
              cursor: pointer;
              margin-bottom: 13px;

              &:hover {
                color: var(--focus)
              }
            }

            ul li:last-child {
              margin: 0;
            }
          }
        }
      }

      /* Notice Board */
      .notice-board {
        /* Notice Board Top */
        &-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
          border-bottom: 2px solid var(--border-color);

          /* Refresh Button */
          .refresh-btn {
            padding: 3px;

            &:hover {
              filter: opacity(0.5) drop-shadow(0 0 0 orange);
            }
          }

          /* Search */
          .search {
            display: flex;
            line-height: 28px;
            align-items: center;
            position: relative;
            width: 35%;

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

      /* Pagination */
      .pagination {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;

        /* Previous, Next */
        .page-btn {
          display: flex;
          align-items: center;
          cursor: pointer;

          span {
            font-size: 15px;
            //font-weight: 600;
          }

          .previous {
            padding-left: 5px;
          }

          .next {
            padding-right: 5px;
          }

          &:hover {
            color: var(--focus);
          }
        }

        /* Pagination Numbers*/
        .page {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 7px;
          border: 1px solid var(--border-color);
          background: #ffffff;
          box-shadow: 0 0 2rem rgba(#5a6181, 0.05);

          &-numbers,
          &-dots {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 8px;
            cursor: pointer;
          }

          &-dots {
            color: orange;
            cursor: initial;
          }

          &-numbers {
            width: 2.6rem;
            height: 2.6rem;
            border-radius: 0.4rem;

            &:hover {
              color: orange;
            }

            &.active {
              color: #ffffff;
              background: orange;
              font-weight: 600;
              border: 1px solid orange;
            }
          }
        }
      }
    }

    .clearfix{
      clear: both;
    }
  }

  /* Footer */
  .footer {
    @include footer;
  }
</style>