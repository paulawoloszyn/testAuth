<template>
    <div>
        Logged in
        <span v-if="loggedIn"> Yes </span>
        <span v-else> No </span>
        <div>
            <button @click="signOut">Sign Out</button>
        </div>
    </div>
</template>

<script>

import * as firebase from "firebase/app";
import "firebase/auth";

    export default {
        created() {
          firebase.auth().onAuthStateChanged(user=> {
            this.loggedIn = !! user;
          })  
        },
        data() {
            return {
                loggedIn: false
            }
        },
        methods: {
            async signOut() {
                try {
                    const data =  await firebase.auth().signOut();
                    console.log(data)
                    this.$router.replace({name: "Login"})
                } catch (error) {
                    console.log(error)
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
     button {
        width: 100px;
        font-size: 15px;
        padding: 10px;
        margin-top: 10px;
        color: #fff;
        background: #F4A261;
        border: none;
        transition: all ease 0.5s;
    }

    button:hover {
        background: #E76F51;
    }
</style>