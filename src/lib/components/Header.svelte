<script lang="ts">
    import clickOutside from "$lib/ts/clickOutside";
    import MessengerModal from "$lib/components/MessengerModal.svelte";
    import {fly} from 'svelte/transition';

    export let isLogin: boolean; // 로그인 버튼 표시
    export let sections; // 메뉴 섹션
    let clickUser = false; // 유저 메뉴 표시
    let clickNotification = false; // 알림 메뉴 표n시
    let clickMessenger = false; // 메신저 메뉴 표시
</script>

<div class="header">
    <nav class="nav">

        <!-- Logo -->
        <div class="logo">
            <h1><a href="/">JoinUs</a></h1>
        </div>
        <!-- //Logo -->

        <!-- Menu -->
        <div class="menu">
            <!-- 로그인 했을 경우 -->
            {#if isLogin}
                <!-- Left Menu -->
                <div class="left-menu">
                    <ul class="left-menu_ul">
                        <li><a href="/app">커뮤니티</a></li>
                        <li><a href="/app/spaces">My Spaces</a></li>
                    </ul>
                </div>
                <!-- //Left Menu -->

                <!-- Right Menu -->
                <div class="right-menu">
                    <!-- Messenger -->
                    <div class="messenger">
                        <button class="messenger-btn" on:click={() => clickMessenger = !clickMessenger}>
                            <img src="/messenger.png" alt="" width="30" height="30">
                        </button>
                    </div>
                    <!-- //Messenger -->

                    <MessengerModal bind:clickMessenger/>


                    <!-- Notification -->
                    <div class="notification" use:clickOutside={() => clickNotification = false}>
                        <button class="notification-btn" on:click={() => clickNotification = !clickNotification}>
                            <img src="/notification.png" alt="" width="30" height="30">
                        </button>

                        {#if clickNotification}
                            <div class="notification-menu" transition:fly={{duration: 200}}>
                                <p class="notification-menu-top">알림</p>
                                <ul class="scroll">
                                    <li>
                                        <div class="notification-title">
                                            <p class="notification-user">김종환</p>
                                            <span>1일 전</span>
                                        </div>
                                        <span>님이 회원님이 작성하신 "제목"에 답변을 달았습니다.</span>
                                    </li>
                                    <li>
                                        <div class="notification-title">
                                            <p class="notification-user">김종환</p>
                                            <span>1일 전</span>
                                        </div>
                                        <span>님이 회원님이 작성하신 "제목"에 답변을 달았습니다.</span>
                                    </li>
                                    <li>
                                        <div class="notification-title">
                                            <p class="notification-user">김종환</p>
                                            <span>1일 전</span>
                                        </div>
                                        <span>님이 회원님이 작성하신 "제목"에 답변을 달았습니다. 그렇다고 하네요 ?? 긴데에ㅔㅔㅔㅔㅔㅔㅔㅔ Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci alias aliquam corporis cumque cupiditate delectus eligendi explicabo iure, maiores, quia quis sunt suscipit veniam. Excepturi exercitationem inventore minus recusandae veniam.</span>
                                    </li>
                                    <li>
                                        <div class="notification-title">
                                            <p class="notification-user">김종환</p>
                                            <span>1일 전</span>
                                        </div>
                                        <span>님이 회원님이 작성하신 "제목"에 답변을 달았습니다.</span>
                                    </li>
                                </ul>
                            </div>
                        {/if}
                    </div>
                    <!-- //Notification -->

                    <!-- User -->
                    <div class="user" use:clickOutside={() => clickUser = false}>
                        <button class="user-btn" on:click={() => clickUser = !clickUser}>
                            <img src="/user.png" alt="" width="30" height="30">
                            <!--                회원정보, 고객센터, 친구가 들어갈 예정-->
                        </button>

                        {#if clickUser}
                            <div class="user-menu" transition:fly={{duration: 200}}>
                                <ul>
                                    {#each sections as section}
                                        <li>
                                            <a href="/app/settings/{section.slug}">
                                                <img src="/{section.slug}.png" alt="" width="20" height="20">
                                                {section.title}
                                            </a>
                                        </li>
                                    {/each}
                                    <li class="logout">
                                        <button>
                                            <img src="/logout.png" alt="" width="20" height="20">
                                            <span>로그아웃</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        {/if}
                    </div>
                    <!-- //User -->
                </div>
                <!-- //Right Menu -->
            {/if}

            <!-- 로그인 하지 않았을 경우 -->
            {#if !isLogin}
                <div class="left-menu">
                    <ul class="left-menu_ul">
                        <li><a href="/app">커뮤니티</a></li>
                    </ul>
                </div>
                <a href="/app/login" class="login-btn">로그인</a>
                <a href="/app/signup" class="signup-btn">회원가입</a>
            {/if}
        </div>
        <!-- //Menu -->
    </nav>
</div>

<style lang="scss">
  .header {
    height: 80px;
    border-bottom: 2px solid var(--border-color);
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    z-index: 2;

    .nav {
      width: 70%;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      /* Logo */
      .logo {
        h1 a {
          color: orange;
        }
      }

      /* Menu */
      .menu {
        display: flex;
        align-items: center;

        /* Left Menu */
        .left-menu {
          .left-menu_ul {
            display: flex;
            align-items: center;

            li a {
              padding: 10px 15px;
              color: black;

              &:hover {
                color: var(--focus);
              }
            }
          }
        }

        /* Right Menu */
        .right-menu {
          display: flex;
          justify-content: space-around;
          width: 200px;
          position: relative;

          /* User */
          .user {
            .user-menu {
              border: 1px solid var(--border-color);
              border-radius: 5px;
              position: absolute;
              margin-top: 10px;
              top: 100%;
              right: 0;
              width: 250px;
              background-color: white;
              box-shadow: 1px 1px 0 var(--border-color);
              padding: 25px 20px;
              color: var(--font-light);
              //font-weight: 600;

              ul li {
                margin: 10px;

                &:last-child {
                  border-top: 1px solid var(--border-color);
                }

                button {
                  border: 0;
                  display: flex;
                  align-items: center;
                  gap: 10px;
                  width: 100%;
                  background-color: white;
                  padding: 5px;
                  margin-top: 10px;
                  cursor: pointer;
                }

                a {
                  display: flex;
                  align-items: center;
                  gap: 10px;
                  color: black;
                  padding: 5px;
                }

                a:hover {
                  color: var(--focus);
                  cursor: pointer;
                }
              }
            }
          }

          /* Notification */
          .notification {
            .notification-menu {
              margin-top: 10px;
              border: 1px solid var(--border-color);
              border-radius: 5px;
              position: absolute;
              right: 0;
              width: 400px;
              background-color: white;

              .notification-menu-top {
                padding: 10px;
                background-color: var(--ivory);
              }

              .scroll {
                /* 스크롤바 설정*/
                &::-webkit-scrollbar {
                  width: 6px;
                }

                /* 스크롤바 막대 설정*/
                &::-webkit-scrollbar-thumb {
                  background-color: var(--border-color);
                  /* 스크롤바 둥글게 설정    */
                  border-radius: 10px;
                }

                /* 스크롤바 뒷 배경 설정*/
                //&::-webkit-scrollbar-track{
                //  background-color:
                //}
              }

              ul {
                height: 300px;
                overflow: auto;

                li {
                  border-bottom: 1px solid var(--border-color);
                  padding-bottom: 15px;
                  margin: 10px 20px;
                  cursor: pointer;

                  .notification-title {
                    display: flex;
                    justify-content: space-between;
                  }

                  span {
                    font-size: 14px;
                  }

                  &:last-child {
                    border: 0;
                    padding-bottom: 0;
                  }

                  &:hover {
                    color: var(--focus);
                  }
                }
              }
            }
          }

          .messenger-btn, .notification-btn, .user-btn {
            margin-left: 10px;
            padding: 4px 5px 0px 5px;
            @include ivory-btn;
          }
        }

        /* isLogin = false */
        .login-btn {
          padding: 7px 15px;
          margin-left: 10px;
          @include orange-btn;
        }

        .signup-btn {
          padding: 7px 15px;
          margin-left: 10px;
          @include orange-btn;
          background-color: var(--ivory) !important;
          color: black !important;
        }
      }
    }
  }
</style>
