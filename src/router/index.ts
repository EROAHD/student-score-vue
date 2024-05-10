import {createRouter, createWebHistory,} from "vue-router";
import Student from "../components/Student.vue";
import Login from "../components/Login.vue";
import NotFound from "../view/NotFound.vue";
import StudentScore from "../components/StudentScore.vue";
import StudentInfo from "../components/StudentInfo.vue";
import StudentHome from "../components/StudentHome.vue";


const router = createRouter({
        history: createWebHistory(),
        routes: [
            {
                path: "/",
                component: Student,
                children: [
                    {
                        path: "home",
                        component: StudentHome
                    },
                    {
                        path: "score",
                        component: StudentScore
                    },
                    {
                        path: "info",
                        component: StudentInfo
                    }

                ],
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
    const token = localStorage.getItem("token")
    const tokenExpiration = localStorage.getItem("tokenExpiration")
    if (token && tokenExpiration && Number(tokenExpiration) < new Date().getTime()) {
        localStorage.removeItem("token")
        localStorage.removeItem("tokenExpiration")
        next("/login")
    } else if (to.path == "/") {
        next("/home")
    } else if (to.path == "/login" && token != null) {
        next("/")
    } else if (to.meta.needLogin && token == null) {
        next("/login")
    } else {
        next()
    }
})

export default router
