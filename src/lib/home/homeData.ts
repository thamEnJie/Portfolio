import type { Item } from "../data/data"

export interface ItemArray {
    heading: string;
    itemList: Item[]
}

export interface Interest {
    title: string,
    subtitle: string,
    em1: string,
    em2: string,
    items: ItemArray[],
}

export const interests: Interest[] = [
    {
        title: "Sciences",
        subtitle: "How Things Work",
        em1: "🔬⚛️",
        em2: "⚛️🧪",
        items: [
            {
                heading: "Mathematics, Chemistry & Other Sciences",
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
                        name: "Understanding People",
                        desc: "Understanding Pyschology allows me to better work with people by being able to understand why people do certain things.",
                    },
                    {
                        name: "MindField",
                        desc: "The reason I got into Psychology is from MindField, a Youtube Series by VSauce. It opened me to new ideas on how people can have such diverse minds.",
                    },
                ]
            },
            // {
            //     heading: "Ecology & Nature",
            //     itemList: [
            //         {
            //             name: "Understanding People",
            //             desc: "Understanding Pyschology allows me to better work with people by being able to understand why people do certain things.",
            //         },
            //         {
            //             name: "MindField",
            //             desc: "The reason I got into Psychology is from MindField, a Youtube Series by VSauce. It opened me to new ideas on how people can have such diverse minds.",
            //         },
            //     ]
            // },
        ]
    },
    {
        title: "Engineering",
        subtitle: "How To Make Things Work",
        em1: "👨‍💻⚙️",
        em2: "⚙️👨‍💻",
        items: [
            {
                heading: "Product Creation",
                itemList: [
                    {
                        name: "Creation through Projects",
                        desc: "I love to generate solutions in my mind, but I also love the process of bringing these ideas to reality. Which is why I have multiple personal projects!"
                    },
                    {
                        name: "Problem Solving",
                        desc: "When I watch videos and view resources on making products, I am amazed by the smart and efficient ways they reach a solution, and is something I find satisfying."
                    },
                ],
            },
            {
                heading: "Computing & Electronics",
                itemList: [
                            {
                        name: "Self-Learning Computing",
                        desc: "The accesible and quick nature of computing is very conducive for self-learning! I've taught myself python for various applications, and svelte here just to learn web-development and make this website!"
                    },
                    {
                        name: "Electronics",
                        desc: "The hardware part of technology, it's very fun to be able to link it to my chemistry knowledge! I have taken Electronics in SST as an Applied Subject."
                    },
                ]
            },
        ]
    },
    // {
    //     title: "Learning",
    //     subtitle: "Reality to Ideas",
    //     items: [
    //         {
    //             heading: "XXX",
    //             itemList: [
    //                         {
    //                     name: "NAME",
    //                     desc: "DESCRIPTION"
    //                 },
    //                 {
    //                     name: "NAME",
    //                     desc: "DESCRIPTION"
    //                 },
    //             ]
    //         },
    //         {
    //             heading: "XXX",
    //             itemList: [
    //                         {
    //                     name: "NAME",
    //                     desc: "DESCRIPTION"
    //                 },
    //                 {
    //                     name: "NAME",
    //                     desc: "DESCRIPTION"
    //                 },
    //             ],
    //         },
    //     ]
    // },
    // {
    //     title: "Impact",
    //     subtitle: "Reality to Ideals",
    //     items: [
    //         {
    //             heading: "Ecology",
    //             itemList: [
    //                         {
    //                     name: "NAME",
    //                     desc: "DESCRIPTION"
    //                 },
    //                 {
    //                     name: "NAME",
    //                     desc: "DESCRIPTION"
    //                 },
    //             ]
    //         },
    //         {
    //             heading: "People & Community",
    //             itemList: [
    //                         {
    //                     name: "NAME",
    //                     desc: "DESCRIPTION"
    //                 },
    //                 {
    //                     name: "NAME",
    //                     desc: "DESCRIPTION"
    //                 },
    //             ],
    //         },
    //     ]
    // },
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
        title: "Svelte",
        text: "with Typescript",
    },
    {
        title: "OnShape",
        text: "CAD Modelling",
    },
    {
        title: "Blender",
        text: "Mesh Modelling",
    },
    {
        title: "Figma",
        text: "Interface Design",
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