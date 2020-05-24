<template>
    <div>
        Login
        <form @submit.prevent="pressed">
            <div class="login">
                <input type="email" placeholder="login">
            </div>

            <div class="password">
                <input type="password" placeholder="password" v-model="password">
            </div>
            <button type="submit">Login</button>
        </form>

        <div class="error" v-if="error"> {{error.message}} </div>

        <div class="createAcc">
            <span>Need an account? Click here to <router-link to="/register"> register</router-link></span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: "",
                password: "",
                error:""
            }
        },
        methods: {
            pressed() {
                alert('hi')
            }
        },
    }
</script>

<style lang="scss" scoped>
    .error {
        color: red;
        font-size: 18px;
    }

    input {
        width: 400px;
        padding: 20px;
        margin: 20px;
        font-size: 21px;
    }

    button {
        width: 400px;
        height: 75px;
        font-size: 20px;
        color: #fff;
        background: #F4A261;
        border: none;
        transition: all ease 0.5s;
    }

    button:hover {
        background: #E76F51;
    }

    .createAcc {
        padding: 20px;
    }

    .createAcc a {
        text-decoration: none;
        color: #AF9164;
    }

</style>