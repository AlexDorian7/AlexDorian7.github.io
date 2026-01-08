export interface Profile_t {
    name: string;
    avatar: string;
}

export interface Project_t {
    name: string;
    image: string?;
    description: string;
    link: { href: string, text: string }[];
}