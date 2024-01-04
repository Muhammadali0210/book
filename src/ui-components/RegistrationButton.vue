<template>
    <button class="register-button" type="submit">
        <slot></slot>
    </button>
</template>
<script>
export default {
    name: "RegistrationButton"
}
</script>
<style>
.register-button{
    border-radius: 50px;
    width: 100%;
    padding: 5px 20px;
    color: var(--itemBg);
    background-color: var(--saveButton);
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 36px;
}
</style>