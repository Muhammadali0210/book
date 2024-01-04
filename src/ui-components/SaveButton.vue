<template>
    <div class="save-button cursor">
        {{ $store.state.lang.saveChanges }}
    </div>
</template>
<script>
export default {
    name: "SaveButton"
    
}
</script>
<style scoped>
.save-button{
    width: auto;
    display: inline-block;
    float: right;
    text-align: center;
    padding: 12px 24px;
    background-color: var(--saveButton);
    color: var(--blackWhite);
    font-size: 13px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border-radius: 4px;
}
</style>