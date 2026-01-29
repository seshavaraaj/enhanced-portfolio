export interface Skill {
    id: string;
    name: string;
    iconClass?: string;
}

export interface Project {
    id: string;
    title: string;
    description: string; // Short summary for the card
    longDescription?: string; // Detailed description for the modal
    image: string; // Cover image
    gallery?: string[]; // Array of additional screenshots
    tags?: string[];
    link?: string;
    github?: string;
}
