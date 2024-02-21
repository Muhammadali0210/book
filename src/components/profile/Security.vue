    <template>
        <div class="security-wrap">
            <form action="#">
                <div class="profile-title">{{ $store.state.lang.changeOrRecover }}</div>
                <br/>
                <ProfileInput name="email" type="text" placeholder="data" :text="$store.state.lang.email" :label="$store.state.lang.emailLabel"/>
                <ProfileInput name="password" type="password" placeholder="data" :text="$store.state.lang.password" :label="$store.state.lang.currentPassword"/>
                <ProfileInput name="newpassword" type="password" placeholder="data" :text="$store.state.lang.newPassword" :label="$store.state.lang.newPasswordLabel"/>
                <br/>
                <SaveButton />
            </form>
        </div>
    </template>
    <script>
    export default {
        
    }
    </script>
    <style scoped>
    .security-wrap{
        width: 712px;
    }
    </style>