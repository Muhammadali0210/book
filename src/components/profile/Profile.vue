<template>
    <div class="my-profil-wrapper">
        <ProfileInput name="name" type="text" placeholder="data" :text="$store.state.lang.firstName" :label="$store.state.lang.firstNameLabel"/>
        <SaveButton />
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    
</style>