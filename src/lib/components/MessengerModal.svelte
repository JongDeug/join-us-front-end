<script>
    import Options from "$lib/components/Tab.svelte";
    import {page} from "$app/stores";
    import Pagination from "$lib/components/Pagination.svelte";

    export let clickMessenger; // 메신저 메뉴 표시

    let dialog; // HTMLDialogElement

    $: if (dialog && clickMessenger) dialog.showModal();

    // 옵션
    let selected = "write";
    let options = $page.data.options.messenger;
    $: console.log(selected);
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<!-- on:click|self : 이벤트 타겟이 자신과 같을 때 트리거 됨.-->
<dialog class="modal"
        bind:this={dialog}
        on:close={() => clickMessenger = false}
        on:click|self={() => dialog.close()}
>
    <div class="inner-modal">
        <div class="top">
            <h2>쪽지</h2>
            <button class="close-btn" on:click={() => dialog.close()}>
                <img src="/close.png" alt="" width="24" height="24">
            </button>
        </div>

        <div class="content">
            <div class="div-select">
                <Options bind:selected {options}/>
            </div>

            <table class="table">
                <tr>
                    <th class="table-h1"><input type="checkbox"></th>
                    <th class="table-h2">번호</th>
                    <th class="table-h3">보낸사람</th>
                    <th class="table-h4">내용</th>
                    <th>일시</th>
                </tr>
                <tr>
                    <th><input type="checkbox"></th>
                    <td>1</td>
                    <td>Maria Anders</td>
                    <td>Germany slkdjfa;lkdsfja;dslkfjas;lkfdjsad;flk</td>
                    <td>2023-12-31</td>
                </tr>
                <tr>
                    <th><input type="checkbox"></th>
                    <td>2</td>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Changsdflksajdfalskdfj</td>
                    <td>2023-12-31</td>
                </tr>
                <tr>
                    <th><input type="checkbox"></th>
                    <td>3</td>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Changsdflksajdfalskdfj</td>
                    <td>2023-12-31</td>
                </tr>
                <tr>
                    <th><input type="checkbox"></th>
                    <td>3</td>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Changsdflksajdfalskdfj</td>
                    <td>2023-12-31</td>
                </tr>
            </table>

        </div>
        <!-- svelte-ignore a11y-autofocus -->
        <!-- <button autofocus on:click={() => dialog.close()}>close modal</button> -->
    </div>
</dialog>

<style lang="scss">
  dialog {
    width: 50%;
    border-radius: 0.2em;
    margin: 80px auto;

    &::backdrop {
      background: rgba(0, 0, 0, 0.3);
    }

    &[open] {
      animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);

      &::backdrop {
        animation: fade 0.2s ease-out;
      }
    }

    .inner-modal {
      padding: 20px;

      .top {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        margin-bottom: 10px;

        .close-btn {
          padding: 0;
        }
      }

      .content {
        padding: 5px 0;

        .div-select {
          display: flex;
          justify-content: left;
          margin-bottom: 30px;
        }

        .table {
          width: 100%;

          &-h3 {
            width: 30%;
          }

          &-h4 {
            width: 40%;
          }
        }
      }

      table, th, td {
        border: 1px solid black;
        border-collapse: collapse;
        padding: 5px 8px;
      }
    }
  }


  @keyframes zoom {
    from {
      transform: scale(0.95);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes fade {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
</style>