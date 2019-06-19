export class Movie {
    id: number;
    title: string;
    language: string;
    image: string;
    restriction: string;
    created: Date;
    updated: Date;
    description: string;

    constructor(
        id?: number,
        title?: string,
        language?: string,
        image?: string,
        restriction?: string,
        created?: Date,
        updated?: Date,
        description?: string
    ) {
        this.id = id;
        this.title = title;
        this.language = language;
        this.image = image;
        this.restriction = restriction;
        this.created = created;
        this.updated = updated;
        this.description = description;
    }
}
