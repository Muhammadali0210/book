<template>
    <textarea name="name" class="registration-input" :placeholder="placeholder" ></textarea>
  </template>
  
  <script>
  export default {
      name: "RegistrationTextarea",
      props:{
          placeholder: String,
          name: String,
      }
  }
  </script>
  
  <style scoped>
  .registration-input{
    width: 100%;
    max-width: 330px;
    min-width: 330px;
    max-height: 82px;
    min-height: 82px;
    border: 1px solid #B5B4B9;
    color: #B5B4B9;
    border-radius: 10px;
    padding: 12px 12px 12px 30px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }
  </style>