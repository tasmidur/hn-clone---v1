<template>
<li class="news-item">
    <span class="score">{{ item.score }}</span>
    <span class="title">
        <template v-if="item.url">
            <a :href="item.url" target="_blank" rel="noopener">{{ item.title }}</a>
            <span class="host"> ({{host(item.url )}})</span>
        </template>
        <template v-else>
            <router-link :to="'/item/' + item.id">{{ item.title }}</router-link>
        </template>
    </span>
    <br>
    <span class="meta">
        <span v-if="item.type !== 'job'" class="by">
            by <router-link :to="'/user/' + item.by">{{ item.by }}</router-link>
        </span>
        <span class="time">
            {{timeAgo(item.time)}} ago
        </span>
        <span v-if="item.type !== 'job'" class="comments-link">
            | <router-link :to="'/item/' + item.id">{{ item.descendants }} comments</router-link>
        </span>
    </span>
    <span class="label" v-if="item.type !== 'story'">{{ item.type }}</span>
</li>
</template>

<script>
export default {
    name: 'news-item',
    props: ['item'],
    methods: {
        host: function (url) {
            const hosted = url.replace(/^https?:\/\//, '').replace(/\/.*$/, '')
            const parts = hosted.split('.').slice(-3)
            if (parts[0] === 'www') parts.shift()
            return parts.join('.')
        },
        timeAgo: function (time) {
            const between = Date.now() / 1000 - Number(time)
            if (between < 3600) {
                return this.pluralize(~~(between / 60), ' minute')
            } else if (between < 86400) {
                return this.pluralize(~~(between / 3600), ' hour')
            } else {
                return this.pluralize(~~(between / 86400), ' day')
            }
        },
        pluralize: function (time, label) {
            if (time === 1) {
                return time + label
            }
            return time + label + 's'
        }
    }
}
</script>

<style scoped>
.news-item {
    background-color: #fff;
    padding: 20px 30px 20px 80px;
    border-bottom: 1px solid #eee;
    position: relative;
    line-height: 20px;
    color: black;
}

.news-item .title {
    color: black;
    font-weight: bold;
}

.score {
    color: #ff6600;
    font-size: 1.1em;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 0;
    width: 80px;
    text-align: center;
    margin-top: -10px;
}

.meta,
.host {
    font-size: .85em;
    color: #828282
}

a {
    color: #828282;
    text-decoration: underline
}

a:hover {
    color: #ff6600;
}
</style> -->
