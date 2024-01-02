<script>
    import Post from "$lib/components/Post.svelte";
    import {fly} from 'svelte/transition';
    import clickOutside from "$lib/ts/clickOutside";
    import Pagination from "$lib/components/Pagination.svelte";

    let whichBoard = true; // 구인 게시판(true), 질문 게시판(false) 선택
    let clickSort = false; // 정렬 메뉴 표시
</script>

<div class="wrapper">
    <div class="commercial-content">
    </div>

    <div class="main-content">
        <div class="main-content__introduce">
            <!-- Introduce -->
            <div class="introduce">
                {#if whichBoard}
                    <span class="introduce__title">구인 게시판</span><br>
                    프로젝트를 함께할 동료를 구하는 공간입니다.
                {:else}
                    <span class="introduce__title">질문 게시판</span><br>
                    무엇이든 질문할 수 있는 공간입니다.
                {/if}
            </div>
            <!-- //Introduce -->
        </div>

        <div class="main-content__menu">
            <div class="main-content__menu--row1">
                <!-- Write Button -->
                <div class="write-btn">
                    <a href="/app/community/new" class="write-btn__link">
                        <img class="write-btn__img" src="/write.png" alt="" width="15" height="15">
                        <span>작성하기</span>
                    </a>
                </div>
                <!-- //Write Button -->

                <!-- Nav -->
                <div class="nav">
                    <ul class="nav__list">
                        <li>
                            <button class="nav__btn" class:nav__btn--focused={whichBoard}
                                    on:click={() => whichBoard=true}>구인 게시판
                            </button>
                        </li>
                        <li>
                            <button class="nav__btn" class:nav__btn--focused={!whichBoard}
                                    on:click={() => whichBoard=false}>질문 게시판
                            </button>
                        </li>
                    </ul>
                </div>
                <!-- //Nav -->

                <!-- Sort Button -->
                <div class="sort-btn" use:clickOutside={() => clickSort = false}>
                    <!--                            특정 영역 제외 클릭 시 닫기-->
                    <button class="sort-btn__btn" on:click={() => clickSort = !clickSort}>
                        <img src="/sort.png" alt="" width="16" height="16">
                        <span class="sort-btn__text">정렬</span>
                    </button>

                    {#if clickSort}
                        <ul class="sort-btn__list" transition:fly={{duration: 200}}>
                            <li class="sort-btn__item">최신순</li>
                            <li class="sort-btn__item">답변순</li>
                            <li class="sort-btn__item">추천순</li>
                            <li class="sort-btn__item">조회순</li>
                        </ul>
                    {/if}
                </div>
                <!-- //Sort Button -->
            </div>

            <div class="main-content__menu--row2">
                <!-- Refresh Button -->
                <div class="refresh-btn">
                    <img class="refresh-btn__img" src="/refresh.png" alt="" width="20" height="20">
                </div>
                <!-- //Refresh Button -->

                <!-- Search -->
                <div class="search">
                    <svg class="search__icon" viewBox="0 0 24 24" aria-hidden="true">
                        <g>
                            <path
                                    d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                            ></path>
                        </g>
                    </svg>
                    <input class="search__input" type="search" placeholder="검색하기"/>
                </div>
                <!-- //Search -->
            </div>
        </div>

        <div class="main-content__board">
            <!-- Posts -->
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <!-- //Posts -->
            <Pagination/>
        </div>
    </div>
</div>

<style lang="scss">

  /* Layout */
  .wrapper {
    display: flex;
    gap: 150px;

    .main-content {
      //&__introduce {}
      //&__board {}

      &__menu {
        &--row1 {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 30px;
          border-bottom: 2px solid var(--border-color);
        }

        &--row2 {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 0;
          border-bottom: 2px solid var(--border-color);
        }
      }
    }
  }

  /* Introduce */
  .introduce {
    width: 100%;
    margin-bottom: 30px;
    padding: 20px 40px;
    border: 2px solid var(--border-color);
    border-radius: 5px;

    &__title {
      font-size: 20px;
      font-weight: 600;
    }
  }

  /* Write Button */
  .write-btn {
    &__link {
      padding: 8px 20px;
      @include orange-btn;
    }

    &__img {
      display: inline-block;
      vertical-align: middle;
      margin-right: 1px;
    }
  }

  /* Nav */
  .nav {
    &__list {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    &__btn {
      background: white;
      border: 0;
      color: black;
      font-weight: 600;
      cursor: pointer;
      padding: 10px 25px;

      &:hover {
        color: var(--focus);
      }

      &--focused {
        text-decoration: underline;
      }
    }
  }

  /* Sort Button */
  .sort-btn {
    position: relative;

    &__btn {
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

      &:hover {
        border: 1px solid black;
      }
    }

    &__text {
      margin-left: 5px;
    }

    &__list {
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
    }

    &__item {
      cursor: pointer;
      margin-bottom: 13px;

      &:hover {
        color: var(--focus)
      }

      &:last-child {
        margin: 0
      }
    }
  }

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

    &__icon {
      position: absolute;
      left: 1rem;
      fill: #9e9ea7;
      width: 1rem;
      height: 1rem;
    }

    &__input {
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
</style>