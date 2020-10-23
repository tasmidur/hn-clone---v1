<template>
<transition>
    <svg class="spinner" :class="{ show: show }" v-show="show" width="44px" height="44px" viewBox="0 0 44 44">

    </svg>
</transition>
</template>

<script>
export default {
    name: 'spinner',
    props: ['show'],
    serverCacheKey: props => props.show
}
</script>

<style>
.spinner {
    border: 3px solid #f3f3f3;
    border-radius: 50%;
    border-top: 3px solid #FF6600;
    width: 20px;
    height: 20px;
    -webkit-animation: spin 1s linear infinite;
    /* Safari */
    animation: spin 1s linear infinite;
    animation-play-state: running;
    display: inline-block;

}

.spinner .show {
    animation-play-state: paused;

}

/* Safari */
@-webkit-keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
    }

    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}
</style>
