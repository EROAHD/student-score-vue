import {createRouter, createWebHistory,} from "vue-router";
import Student from "../components/Student/Student.vue";
import Login from "../components/Login.vue";
import NotFound from "../view/NotFound.vue";
import StudentScore from "../components/Student/StudentScore.vue";
import StudentInfo from "../components/Student/StudentInfo.vue";
import StudentHome from "../components/Student/StudentHome.vue";
import Teacher from "../components/Teacher/Teacher.vue";
import TeacherHome from "../components/Teacher/Home.vue";
import TeacherStudents from "../components/Teacher/Students.vue";
import TeacherInfo from "../components/Teacher/Info.vue";
import TeacherCourse from "../components/Teacher/CourseRoot.vue";
import {useUserStore} from "../stores/useUserStore.ts";


const router = createRouter({
        history: createWebHistory(),
        routes: [
            {
                path: "/student",
                component: Student,
                name: "studentRoot",
                children: [
                    {
                        path: "home",
                        name: "studentHome",
                        component: StudentHome
                    },
                    {
                        path: "score",
                        name: "studentScore",
                        component: StudentScore
                    },
                    {
                        path: "info",
                        name: "studentInfo",
                        component: StudentInfo
                    }
                ]
            },
            {
                path: "/teacher",
                component: Teacher,
                name: "teacherRoot",
                children: [
                    {
                        path: "home",
                        name: "teacherHome",
                        component: TeacherHome
                    },
                    {
                        path: "course",
                        name: "teacherCourse",
                        component: TeacherCourse
                    },
                    {
                        path: "students",
                        name: "teacherStudents",
                        component: TeacherStudents
                    },
                    {
                        path: "info",
                        name: "teacherInfo",
                        component: TeacherInfo
                    }
                ]
            },
            // 登陆页面
            {
                path: "/login",
                name: "login",
                component: Login
            },
            {
                path: '/notfound',
                name: "NotFound",
                component: NotFound
            }
        ]
    }
)

router.beforeEach((to, _, next) => {
    console.log(to.path)
    let token = localStorage.getItem("token")
    let tokenExpiration = localStorage.getItem("tokenExpiration");
    let userType = localStorage.getItem("userType")
    if (to.path == "/login" || to.path == "/notfound")
        next()
    if (!(token && tokenExpiration && userType)) {
        useUserStore().resetStore()
        next({name: "login"})
        return
    } else if (to.path.toLowerCase() === `/${userType}/` || to.path == "/") {
        next(`/${userType}/home`)
        return
    } else if (!to.path.toLowerCase().startsWith(`/${userType}/`)) {
        console.log(to.name)
        next("/notfound")
        return;
    }
    next()
})

export default router
