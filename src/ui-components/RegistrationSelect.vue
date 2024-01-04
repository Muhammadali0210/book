<template>
    <select :name="name" class="registration-input">
        <option value="" disabled selected>{{ placeholder }}</option>
        <option value="value1">Temuriylar davri </option>
        <option value="value2">Jadid adabiyoti </option>
        <option value="value3">Sovet davri</option>
        <option value="value3">Mustaqillik davri</option>
    </select>
</template>
  
  <script>
  export default {
      name: "RegistrationSelect",
      props:{
          placeholder: String,
          name: String,
      }
  }
  </script>
  
  <style scoped>
  .registration-input{
    width: 100%;
    border: 1px solid #B5B4B9;
    color: #B5B4B9;
    border-radius: 10px;
    padding: 12px 12px 12px 30px;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }

  </style>