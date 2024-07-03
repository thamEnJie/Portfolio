import type { Item } from "../data/data"

export interface ItemArray {
    heading: string;
    itemList: Item[]
}

export interface Interest {
    title: string,
    subtitle: string,
    items: ItemArray[],
}

export const interests: Interest[] = [
    {
        title: "Sciences",
        subtitle: "How Things Work",
        items: [
            {
                heading: "Mathematics, Chemistry & Pure Sciences",
                itemList: [
                    {
                        name: "Abstract to Concrete",
                        desc: "They bring such abstractness of our world into simpler, manipulatable, concrete understanding.",
                    },
                    {
                        name: "Derivation & Extensiveness",
                        desc: "They allow me to derive many other things in and out of the subject just by knowing key and core concepts.",
                    },
                ]
            },
            {
                heading: "Psychology and Sociology",
                itemList: [
                    {
                        name: "MindField",
                        desc: "The reason I got interested in Psychology is from MindField, a Youtube Series by VSauce. It ",
                    },
                    {
                        name: "Understanding People",
                        desc: "DESC",
                    },
                ]
            },
        ]
    },
    {
        title: "Engineering",
        subtitle: "How To Make Things Work",
        items: [
            {
                heading: "Computing",
                itemList: [
                            {
                        name: "NAME",
                        desc: "DESCRIPTION"
                    },
                    {
                        name: "NAME",
                        desc: "DESCRIPTION"
                    },
                ]
            },
            {
                heading: "Engineering",
                itemList: [
                            {
                        name: "NAME",
                        desc: "DESCRIPTION"
                    },
                    {
                        name: "NAME",
                        desc: "DESCRIPTION"
                    },
                ],
            },
        ]
    },
    {
        title: "Development",
        subtitle: "Ideas to Reality",
        items: [
            {
                heading: "Scientific Research",
                itemList: [
                            {
                        name: "NAME",
                        desc: "DESCRIPTION"
                    },
                    {
                        name: "NAME",
                        desc: "DESCRIPTION"
                    },
                ]
            },
            {
                heading: "Creation with Projects",
                itemList: [
                            {
                        name: "NAME",
                        desc: "DESCRIPTION"
                    },
                    {
                        name: "NAME",
                        desc: "DESCRIPTION"
                    },
                ],
            },
        ]
    },
    {
        title: "Impact",
        subtitle: "Reality to Ideals",
        items: [
            {
                heading: "Ecology",
                itemList: [
                            {
                        name: "NAME",
                        desc: "DESCRIPTION"
                    },
                    {
                        name: "NAME",
                        desc: "DESCRIPTION"
                    },
                ]
            },
            {
                heading: "People & Community",
                itemList: [
                            {
                        name: "NAME",
                        desc: "DESCRIPTION"
                    },
                    {
                        name: "NAME",
                        desc: "DESCRIPTION"
                    },
                ],
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