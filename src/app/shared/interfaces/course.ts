import { languageCode } from '../type';

export interface Course {
    id: number;
    name: string;
    featured: true;
    image: string;
    language: languageCode;
    price: number;
    duration: number;
    lessons: number;
    deadline: string | Date;
    students: number;
    summary: string;
    instructor: number;
    category: number;
}
