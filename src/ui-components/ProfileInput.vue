<template>
    <div class="profile-input-content">
        <div class="profile-text">{{ text }}</div>
        <input :type="type" name="name" class="profile-input" :placeholder="placeholder" >
        <div class="profile-label">{{ label }}</div>
    </div>
</template>
  
<script>
export default {
    name: "ProfileInput",
    props:{
        type: String,
        placeholder: String,
        name: String,
        text: String,
        label: String
    }
}
</script>

<style scoped>
.profile-input{
    width: 100%;
    background-color: #F2F6F7;
    border-radius: 4px;
    color: var(--profileInputText);
    padding: 12px 20px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin: 7px 0 3px;
}
.profile-text{
    color: var(--profilText);
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.profile-label{
    color: var(--profileLabel);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
</style>