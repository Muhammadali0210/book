<template>
    <div class="container">
        <div class="search-wrap">
            <div class="search-title">{{ $store.state.lang.searchTitle }}</div>
            <div class="search-contemt">
                <input type="text" class="search-input" :placeholder="$store.state.lang.searchInputPlaceholder">
                <div class="search-button cursor">
                    <div class="search-icon"></div>
                    <div class="search-text">{{$store.state.lang.searchButton}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.search-wrap{
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 29px 73px;
    width: 1030px;
    column-gap: 9px;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 15px;
    background-color: var(--homeBg);
    box-shadow: 0px 4px 77px 0px rgba(128, 128, 128, 0.25);
    z-index: 10;
}
.search-title{
    text-align: center;
    color: #D1B89D;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.search-contemt{
    display: grid;
    grid-template-columns: 9fr 2fr;
    gap: 14px;
}
.search-input{
    border-radius: 15px;
    background-color: var(--searchInput);
    padding: 12px 27px;
    outline: none;
    border: none;
    color: rgba(13, 13, 13, 0.30);
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.search-button{
    display: flex;
    padding: 12px 37px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 15px;
    background-color: #CFAC85;
    color: var(--searchButtonText);
}
.search-button:hover{
    scale: 1.05;
}
.search-icon{
    background-image: url(../../assets/icons/search.svg);
    width: 24px;
    height: 24px;
}

</style>