<script>
    export let options;
    export let selected;

</script>
<div class="select">
    {#each options as option}
        <div class="option">
            <input class="input" type="radio" name="btn" value={option.value} bind:group={selected}>
            <div class="btn">
                <span class="span">{option.title}</span>
            </div>
        </div>
    {/each}
</div>

<style lang="scss">
  .select {
    position: relative;
    //width: 300px;
    padding: 0 5px;
    height: 36px;
    background-color: var(--ivory);
    border: 2px solid var(--font-light);
    border-radius: 34px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    box-shadow: 4px 4px var(--font-light);

    .option {
      // width:80.5 px;
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
        // 버튼에 패딩
        padding: 10px;
      }
    }
  }
</style>