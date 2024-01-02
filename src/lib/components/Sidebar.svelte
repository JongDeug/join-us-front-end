<script>
    export let sections;
</script>
<div class="sidebar">
    <h2>설정</h2>
    <ul>
        {#each sections as section}
            <li class:which={section.which == section.slug ? true : false}>
                <img src="/{section.slug}.png" alt="" width="20" height="20">
                <a href="/app/settings/{section.slug}">{section.title}</a>
            </li>
        {/each}
    </ul>
</div>

<style lang="scss">
  .sidebar {
    width: 25%;
    padding: 30px 30px 30px 0;
    margin-right: 20px;

    ul {
      margin-top: 40px;

      .which {
        background: orange;

        a {
          color: white;
        }
      }

      li {
        padding: 10px 0px 10px 15px;
        margin: 5px;
        border-radius: 5px;
        display: flex;
        align-items: center;


        a {
          display: inline-block;
          margin-left: 10px;
          color: black;

          &:hover {
            color: var(--focus)
          }
        }
      }
    }
  }
</style>