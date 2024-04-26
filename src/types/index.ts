// 定义接口限制Person格式
export interface personInter {
    id: number
    name: string
    age: number
}

// export type persons = personInter[];
export type persons = Array<personInter>;