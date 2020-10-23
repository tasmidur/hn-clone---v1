<template>
<li v-if="comment" class="comment">
    <div class="by">
        <router-link :to="'/user/' + comment.by">{{ comment.by }}</router-link>
        {{ comment.time | timeAgo }} ago
    </div>
    <div class="text" v-html="comment.text"></div>
    <div class="toggle" :class="{ open }" v-if="comment.kids && comment.kids.length">
        <a @click="open = !open">{{
        open
            ? '[-]'
            : '[+] ' + pluralize(comment.kids.length) + ' collapsed'
      }}</a>
    </div>
    <ul class="comment-children" v-show="open">
        <comment v-for="id in comment.kids" :key="id" :id="id"></comment>
    </ul>
</li>
</template>

<script>
export default {
    name: 'comment',
    props: ['id'],
    data() {
        return {
            open: true
        }
    },
    computed: {
        comment() {
            //story comments
            return this.$store.state.items[this.id]
        }
    },
    methods: {
        pluralize: n => n + (n === 1 ? ' reply' : ' replies')
    }
}
</script>

<style scoped>
.comment .comment-children {
    margin-left: 1.5em;
}

.comment {
    border-top: 1px solid #eee;
    position: relative;
}

.comment .by,
.text,
.toggle {
    font-size: .9em;
    margin: 1em 0
}

.comment .by {
    color: #828282;
}

.comment .by a {
    color: #828282;
    text-decoration: underline;
}

.comment .text {
    overflow-wrap: break-word;
}

a:hover {
    color: #ff6600 pre;
    white-space: pre-wrap
}

.comment.toggle {
    background-color: #fffbf2;
    padding: .3em .5em;
    border-radius: 4px;
}

.comment.toggle a {
    color: #828282;
    cursor: pointer;
}

.comment.toggle a .open {
    padding: 0;
    background-color: transparent;
    margin-bottom: -0.5em;
}
</style>
