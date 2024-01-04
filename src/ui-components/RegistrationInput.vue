<template>
  <input :type="type" name="name" class="registration-input" :placeholder="placeholder" >
</template>

<script>
export default {
    name: "RegistrationInput",
    props:{
        type: String,
        placeholder: String,
        name: String,
    }
}
</script>

<style scoped>
.registration-input{
  width: 100%;
  border: 1px solid #B5B4B9;
  background-color: var(--homeBg);
  color: #B5B4B9;
  border-radius: 10px;
  padding: 12px 12px 12px 30px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}
</style>