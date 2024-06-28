<template>
    <div>
        <!-- <h1>MAIN</h1>
        <img src="@\assets\logo.svg" /> -->
        <button @click="goToFirst" name="new name" id="2333" desc="sdfasdfe">Go to first</button>
        <button @click="goToSecond">Go to Second</button>
        <button @click="goToThird">Go to third</button>
        <button @click="goToMain">Return main</button>
        <RouterView v-slot="{ Component }">
            <component :is="Component" />
        </RouterView>
    </div>

</template>
<script setup>
import MainComp from '@/components/MainComp.vue'
import { useRoute, useRouter } from 'vue-router';
const router = useRouter();
const route = useRoute();

const goToFirst = () => {
    const x = {
        name: 'string',
        id: Math.random(0, 1),
        desc: 'string'
    }
    router.push({
        name: 'First', props: (x)
    })
}
const goToSecond = () => {
    router.push('Second')
}
const goToThird = () => {
    router.push('Third')
}

const goToMain = () => {
    router.push('Main')
}
</script>