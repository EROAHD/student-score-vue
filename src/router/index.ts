import {createRouter, createWebHistory,} from "vue-router";
import Login from "../components/Login.vue";
import NotFound from "../view/NotFound.vue";
import {useUserStore} from "../stores/useUserStore.ts";
//
// 导入Teacher相关组件
import Teacher from "../components/Teacher/Teacher.vue";
import TeacherHome from "../components/Teacher/Home.vue";
import TeacherInfo from "../components/Teacher/Info.vue";
import TeacherCourse from "../components/Teacher/CourseRoot.vue";
// 导入学生相关组件
import Student from "../components/Student/Student.vue";
import StudentHome from "../components/Student/Home.vue";
import StudentInfo from "../components/Student/Info.vue";
import StudentScore from "../components/Student/ScoresRoot.vue";
// 导入管理员相关组件
import Admin from "../components/Admin/Admin.vue";
import AdminHome from "../components/Admin/Home.vue";
import AdminInfo from "../components/Admin/Info.vue";
import AdminStudent from "../components/Admin/Student.vue";
import AdminTeacher from "../components/Admin/Teacher.vue";
import AdminCourse from "../components/Admin/Course.vue";
import AdminBanner from "../components/Admin/Banner.vue";

const router = createRouter({
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                redirect: (to) => {
                    let userType = localStorage.getItem('userType');
                    if (userType) {
                        return `/${userType}/home`;
                    } else {
                        return '/login';
                    }
                }
            },
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
                        path: "scores",
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
                        path: "info",
                        name: "teacherInfo",
                        component: TeacherInfo
                    }
                ]
            },
            {
                path: "/admin",
                component: Admin,
                name: "adminRoot",
                children: [
                    {
                        path: "home",
                        name: "adminHome",
                        component: AdminHome
                    },
                    {
                        path: "info",
                        name: "adminInfo",
                        component: AdminInfo
                    },
                    {
                        path: "student",
                        name: "adminStudent",
                        component: AdminStudent
                    },
                    {
                        path: "teacher",
                        name: "adminTeacher",
                        component: AdminTeacher
                    },
                    {
                        path: "course",
                        name: "adminCourse",
                        component: AdminCourse
                    },
                    {
                        path: "banner",
                        name: "adminBanner",
                        component: AdminBanner
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
    if (to.path === '/login' || to.path === '/notfound') {
        next()
        return
    }

    if (!token || !tokenExpiration || !userType) {
        useUserStore().resetStore()
        next('/login')
        return
    }

    if (to.path.toLowerCase() === `/${userType}/` || to.path === '/') {
        next(`/${userType}/home`)
        return
    }

    if (!to.path.toLowerCase().startsWith(`/${userType}/`)) {
        next('/notfound')
        return
    }

    next()
})

export default router
