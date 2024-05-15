import {createRouter, createWebHistory,} from "vue-router";
import Student from "../components/Student/Student.vue";
import Login from "../components/Login.vue";
import NotFound from "../view/NotFound.vue";
import StudentScore from "../components/Student/StudentScore.vue";
import StudentInfo from "../components/Student/StudentInfo.vue";
import StudentHome from "../components/Student/StudentHome.vue";
import Teacher from "../components/Teacher/Teacher.vue";
import TeacherHome from "../components/Teacher/TeacherHome.vue";
import TeacherStudents from "../components/Teacher/TeacherStudents.vue";
import TeacherInfo from "../components/Teacher/TeacherInfo.vue";
import TeacherCourse from "../components/Teacher/TeacherCourse.vue";


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
                ],
                meta: {
                    needLogin: true
                }
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
                ],
                meta: {
                    needLogin: true
                }
            },
            // 登录接口
            {
                path: "/login",
                name: "login",
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

export default router
