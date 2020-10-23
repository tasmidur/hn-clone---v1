<template>
<div class="user-view">
    <template v-if="user">
        <h1>User : {{ user.id }}</h1>
        <ul class="meta">
            <li><span class="label">Created:</span> {{ user.created | timeAgo }} ago</li>
            <li><span class="label">Karma:</span> {{ user.karma }}</li>
            <li v-if="user.about" v-html="user.about" class="about"></li>
        </ul>
        <p class="links">
            <a :href="'https://news.ycombinator.com/submitted?id=' + user.id">submissions</a> |
            <a :href="'https://news.ycombinator.com/threads?id=' + user.id">comments</a>
        </p>
    </template>
    <template v-else-if="user === false">
        <h1>User not found.</h1>
    </template>
</div>
</template>

<script>
import axios from "axios";
export default {
    name: 'user-view',
    computed: {
        user() {
            return this.$store.state.users[this.$route.params.id]
        }
    },
    created() {
        this.$store.dispatch('FETCH_USER', [this.$route.params.id])
    },
    title() {
        return this.user ?
            this.user.id :
            'User not found'
    }
}
</script>

<style scoped>
.user-view {
    background-color: #fff;
    box-sizing: border-box;
    padding: 2em 3em;
}

.view {
    max-width: 500px;
    margin-left: 0 auto;
    margin-right: 0 auto;
    margin-top: 50px;
    position: relative;
    background-color: #f7f7f7;
}

h1 {
    margin: 0;
    font-size: 1.5em;
}

.meta {
    list-style-type: none;
    padding: 0;
}

.label {
    display: inline-block;
    min-width: 4em
}

.about {
    margin: 1em 0
}

.links a {
    text-decoration: underline
}
</style>
