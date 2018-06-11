<template>
    <div>
        <vue-html5-editor :content="content" :height="300"></vue-html5-editor>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                content: "<h3>vue html5 editor</h3>",
            }
        },
    }
</script>

<style scoped>

</style>