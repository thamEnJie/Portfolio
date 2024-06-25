import type { Item } from "../data/data"

export interface Interest {
    title: String,
    subtitle: String,
    items: Item[],
}

export const interests: Interest[] = [
    {
        title: "Sciences",
        subtitle: "How Things Work",
        items: [
            {
                name: "Chemistry & Pure Sciences",
                desc: "DESCRIPTION",
            },
            {
                name: "Psychology and Sociology",
                desc: "DESCRIPTION"
            },
        ]
    },
    {
        title: "Engineering",
        subtitle: "How To Make Things Work",
        items: [
            {
                name: "Computing",
                desc: "DESCRIPTION"
            },
            {
                name: "Electronics",
                desc: "DESCRIPTION"
            },
            {
                name: "Engineering",
                desc: "DESCRIPTION"
            },
        ]
    },
    {
        title: "Development",
        subtitle: "Ideas to Reality",
        items: [
            {
                name: "Scientific Research",
                desc: "DESCRIPTION"
            },
            {
                name: "Creation with Projects",
                desc: "DESCRIPTION"
            },
        ]
    },
    {
        title: "Impact",
        subtitle: "Reality to Ideals",
        items: [
            {
                name: "Ecology",
                desc: "DESCRIPTION"
            },
            {
                name: "People & Community",
                desc: "DESCRIPTION"
            },
        ]
    },
]

export interface HardSkill {
    title: string;
    text: string;
}

export const hardSkills: HardSkill[] = [
    {
        title: "Python",
        text: "Programming",
    },
    {
        title: "SwiftUI",
        text: "with Swift",
    },
    {
        title: "CAD Modelling",
        text: "Precision Models",
    },
    {
        title: "Blender",
        text: "Mesh Modelling & Shading",
    },
    {
        title: "Svelte",
        text: "with Typescript",
    },
    {
        title: "Figma",
        text: "Interface Design",
    },
    {
        title: "Photography",
        text: "(Framing)",
    },
    {
        title: "Electronics",
        text: "(O’Levels Standard)",
    },
]

export interface SoftSkill {
    title: string;
    icon: string;
}

export const softSkills: SoftSkill[] = [
    {
        title: "Critical Thinking",
        icon: "cpu",
    },
    {
        title: "Facilitation of Reflection",
        icon: "chat-left-quote",
    },
    {
        title: "Interest-based Commitment",
        icon: "bullseye",
    },
    {
        title: "Creativity & Innovation",
        icon: "lightbulb",
    },
]