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
    let token = localStorage.getItem("token");
    console.log(to.path)
    if (to.path == "/") {
        next("/home")
    }
    if (to.path == "/login") {
        if (token != null)
            next("/")
    }
    if (to.meta.needLogin) {
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
