import { createWebHistory, createRouter } from 'vue-router'
import FirstComp from "../components/FirstComp.vue";
import MainComp from "../components/MainComp.vue";
import SecondComp from "../components/SecondComp.vue";
import ThirdComp from "../components/ThirdComp.vue";


const routes = [{
    path: '/',
    name: 'Main',
    component: MainComp
},
{
    path: '/first',
    name: 'First',
    component: FirstComp,
    props: (o) => o
    // props: {
    //     name: 'comp',
    //     id: '1',
    //     desc: '22222'
    // }
},
{
    path: '/second',
    name: 'Second',
    component: SecondComp
},
{
    path: '/third',
    name: 'Third',
    component: ThirdComp
}];

export const router = createRouter({
    history: createWebHistory(),
    routes
})
