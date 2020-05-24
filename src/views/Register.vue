<template>
    <div>
        <div v-if="error" class="error">{{ error.message }}</div>
        <form @submit.prevent="pressed">
            Register
            <div class="email">
                <input type="email" v-model="email" placeholder="Email">
            </div>

            <div class="password">
                <input type="password" v-model="password" placeholder="Password">
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";

    export default {
        methods: {
            async pressed() {
                try {
                    const user = firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                    console.log(user)
                    this.$router.replace({name: "Secret"})
                } catch (err) {
                    console.log(err)
                }
            }
        },
        data() {
            return {
                email: "",
                password: "",
                error: ""
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
</style>