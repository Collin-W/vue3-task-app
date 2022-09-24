<template>
    <div style="display: flex; flex-direction: column;">
    {{ items }}
    </div>
</template>

<script>
export default {
    name: 'Wrapper',
    props:{
        items: Array
    }
}
</script>