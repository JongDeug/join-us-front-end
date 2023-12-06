<script>
    export let clickMessenger; // 메신저 메뉴 표시

    let dialog; // HTMLDialogElement

    $: if (dialog && clickMessenger) dialog.showModal();
    $: console.log(clickMessenger)
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

        <hr/>
        <div>
            본문
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium dolorem eaque ex iusto
            labore laboriosam modi molestias mollitia, necessitatibus, quae recusandae sit sunt, tempora vitae.
            Accusantium eveniet omnis similique?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dolore et ipsa magni pariatur quam quod,
            rerum unde? Asperiores aspernatur delectus eius eligendi fugiat illum laboriosam nemo repellendus sequi
            temporibus.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aspernatur cumque cupiditate, deserunt
            doloremque ex quam quis voluptatibus! Doloremque eaque ex harum illum iure molestiae quasi suscipit.
            Laboriosam, minus, similique!
        </div>
        <hr/>
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