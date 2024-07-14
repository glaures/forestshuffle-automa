import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue')
        },
        {
            name: 'start',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/imprint',
            name: 'imprint',
            props: true,
            component: () => import('../views/ImprintView.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {
    const redirect = to.query.redirect;
    if (redirect) {
        next(redirect);
    } else {
        next();
    }
});

export default router
