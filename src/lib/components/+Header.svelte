<script lang="ts">
    export let isLogin: boolean;
</script>

<div class="header">
    <nav class="nav">
        <div class="logo">
            <h1><a href="/app">JoinUs</a></h1>
        </div>

        <div class="menu">
            <!-- 로그인 했을 경우 -->
            {#if isLogin}
                <div class="left-menu">
                    <ul class="left-menu_ul">
                        <li><a href="#">커뮤니티</a></li>
                        <li><a href="#">My Spaces</a></li>
                    </ul>
                </div>

                <div class="right-menu">
                    <div class="messenger">
                        <img src="/messenger.png" alt="" width="32" height="32">
                    </div>
                    <div class="notification">
                        <img src="/notification.png" alt="" width="32" height="32">
                    </div>
                    <div class="user">
                        <img src="/portrait.png" alt="" width="32" height="32">
                        <!--                회원정보, 고객센터, 친구가 들어갈 예정-->
                    </div>
                </div>
            {/if}


            <!-- 로그인 하지 않았을 경우 -->
            {#if !isLogin}
                <div class="left-menu">
                    <ul class="left-menu_ul">
                        <li><a href="#">커뮤니티</a></li>
                    </ul>
                </div>
                <button class="login-btn">로그인</button>
            {/if}
        </div>
    </nav>
</div>

<style lang="scss">
  .header {
    height: 80px;
    border-bottom: 2px solid #dddddd;
    display: flex;
    justify-content: center;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;


    .nav {
      width: 1000px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo {
        h1 a {
          color: orange;
        }
      }

      .menu {
        display: flex;
        align-items: center;

        .left-menu {
          .left-menu_ul {
            display: flex;
            align-items: center;

            li a {
              padding: 10px 15px;
              color: black;

              &:hover {
                color: blue;
              }
            }
          }
        }

        .right-menu {
          display: flex;
          justify-content: space-around;
          width: 200px;
        }

        .login-btn {
          display: inline-block;
          padding: 10px 20px;
          margin-left: 10px;
          font-weight: bold;
          text-align: center;
          text-decoration: none;
          color: white;
          background-color: orange;
          border: 2px solid #000;
          border-radius: 10px;
          box-shadow: 5px 5px 0px #000;
          cursor: pointer;
          transition: all 0.3s ease;

          &:hover {
            background-color: #ffffff;
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
  }
</style>
