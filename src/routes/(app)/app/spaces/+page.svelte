<script>
    import Options from "$lib/components/Options.svelte";
    import {page} from "$app/stores";

    let selected = "recent";
    let options = $page.data.options.spaces;

    $: console.log(selected);
</script>

<div class="wrapper">
    <!-- Main -->
    <div class="main">
        <!-- Functions -->
        <div class="functions">
            <!-- Select -->
            <div class="functions-select">
                <Options bind:selected {options}/>
            </div>
            <!-- //Select -->

            <!-- Search -->
            <div class="functions-search">
                <svg viewBox="0 0 24 24" aria-hidden="true" class="icon">
                    <g>
                        <path
                                d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                        ></path>
                    </g>
                </svg>
                <input type="search" placeholder="검색하기"/>
            </div>
            <!-- //Search -->
        </div>
        <!-- //Functions -->
    </div>
    <!-- //Main-->
</div>

<style lang="scss">
  .wrapper {
    /* Main */
    .main {
      /* Functions */
      .functions {
        display: flex;
        justify-content: flex-end;

        /* Select */
        &-select {
          margin-right: 30px;
        }

        /* Search */
        &-search {
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

          input {
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