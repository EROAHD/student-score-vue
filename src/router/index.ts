import {createRouter, createWebHistory,} from "vue-router";
import Student from "../views/Student.vue";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import NotFound from "../views/NotFound.vue";
import StudentScore from "../views/StudentScore.vue";


const router = createRouter({
        history: createWebHistory(),
        routes: [
            {
                path: "/",
                component: Home,
                meta: {
                    needLogin: true
                }
            },
            {
                path: "/Student",
                component: Student,
                children: [{
                    path: "score",
                    component: StudentScore
                }],
                meta: {
                    needLogin: true
                }
            },
            {
                path: "/login",
                component: Login,
                meta: {
                    needLogin: false
                }
            },
            {
                path: '/:pathMatch(.*)',
                component: NotFound
            }
        ]
    }
)
router.beforeEach((to, _, next) => {
    if (to.meta.needLogin) {
        let token = localStorage.getItem("token");
        if (token == null) {
            next("/login")
        } else {
            next()
        }
    } else {
        next()
    }
})

export default router
