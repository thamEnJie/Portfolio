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
    iconName?: string;
    pad: string;
}

export const hardSkills: HardSkill[] = [
    {
        title: "Python",
        text: "Programming",
        pad: "px-2 py-4",
    },
    {
        title: "SwiftUI",
        text: "with Swift",
        pad: "py-3",
    },
    {
        title: "OnShape",
        text: "CAD Modelling",
        pad: "py-3",
    },
    {
        title: "Blender",
        text: "Mesh Modelling & Shading",
        pad: "px-3 py-5",
    },
    {
        title: "Svelte",
        text: "with Typescript",
        pad: "px-3",
    },
    {
        title: "Figma",
        text: "Interface Design",
        pad: "px-5 py-3",
    },
    {
        title: "Photography",
        text: "(Framing)",
        iconName: "camera",
        pad: "",
    },
    {
        title: "Electronics",
        text: "(O’Levels Standard)",
        iconName: "lightning",
        pad: "",
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