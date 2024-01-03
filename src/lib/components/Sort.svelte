<div class="btn">
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
