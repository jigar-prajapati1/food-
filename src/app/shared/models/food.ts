export class Foods {
    id!: number;
    price!: number;
    Name!: string;
    favourite: boolean = false;
    star: number = 0;
    tags?: string[];
    imageUrl!: string;
    cookTime!: string;
    origins!: string[];


}