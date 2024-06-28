<template>
    <h1>First</h1>
    <div>
        <span>NAME </span><span>{{ props.name }}</span>
        <br>
        <span>ID </span><span>{{ props.id }}</span>
        <br>
        <span>DESC </span><span>{{ props.desc }}</span>
    </div>
</template>
<script setup>
import { defineProps, onMounted } from 'vue'
// import MainComp from '@/components/MainComp.vue'
const props = defineProps({
    name: 'string',
    id: 11,
    desc: 'string'
});
onMounted(() => {
    console.log('Mount');
    console.log('props', props);
})
</script>