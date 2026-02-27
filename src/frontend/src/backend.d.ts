import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Student {
    id: bigint;
    school: string;
    name: string;
    email: string;
    gender: string;
    timestamp: Time;
    classLevel: string;
    mobile: string;
}
export type Time = bigint;
export interface backendInterface {
    getAllStudents(): Promise<Array<Student>>;
    getStudentById(id: bigint): Promise<Student>;
    registerStudent(name: string, email: string, mobile: string, gender: string, school: string, classLevel: string): Promise<bigint>;
}
