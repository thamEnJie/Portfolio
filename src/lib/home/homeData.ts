export interface Item {
    title: String;
    text: String;
}

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
                        title: "Abstract to Concrete",
                        text: "They bring such abstractness of our world into simpler, manipulatable, concrete understanding.",
                    },
                    {
                        title: "Derivation & Extensiveness",
                        text: "They allow me to derive many other things in and out of the subject just by knowing key and core concepts.",
                    },
                ]
            },
            {
                heading: "Psychology and Sociology",
                itemList: [
                    {
                        title: "Understanding People",
                        text: "Understanding Pyschology allows me to better work with people by being able to understand why people do certain things.",
                    },
                    {
                        title: "MindField",
                        text: "The reason I got into Psychology is from MindField, a Youtube Series by VSauce. It opened me to new ideas on how people can have such diverse minds.",
                    },
                ]
            },
            // {
            //     heading: "Ecology & Nature",
            //     itemList: [
            //         {
            //             title: "Understanding People",
            //             text: "Understanding Pyschology allows me to better work with people by being able to understand why people do certain things.",
            //         },
            //         {
            //             title: "MindField",
            //             text: "The reason I got into Psychology is from MindField, a Youtube Series by VSauce. It opened me to new ideas on how people can have such diverse minds.",
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
                        title: "Creation through Projects",
                        text: "I love to generate solutions in my mind, but I also love the process of bringing these ideas to reality. Which is why I have multiple personal projects!"
                    },
                    {
                        title: "Problem Solving",
                        text: "When I watch videos and view resources on making products, I am amazed by the smart and efficient ways they reach a solution, and is something I find satisfying."
                    },
                ],
            },
            {
                heading: "Computing & Electronics",
                itemList: [
                            {
                        title: "Self-Learning Computing",
                        text: "The accesible and quick nature of computing is very conducive for self-learning! I've taught myself python for various applications, and svelte here just to learn web-development and make this website!"
                    },
                    {
                        title: "Electronics",
                        text: "The hardware part of technology, it's very fun to be able to link it to my chemistry knowledge! I have taken Electronics in SST as an Applied Subject."
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
    //                     title: "title",
    //                     text: "textRIPTION"
    //                 },
    //                 {
    //                     title: "title",
    //                     text: "textRIPTION"
    //                 },
    //             ]
    //         },
    //         {
    //             heading: "XXX",
    //             itemList: [
    //                         {
    //                     title: "title",
    //                     text: "textRIPTION"
    //                 },
    //                 {
    //                     title: "title",
    //                     text: "textRIPTION"
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
    //                     title: "title",
    //                     text: "textRIPTION"
    //                 },
    //                 {
    //                     title: "title",
    //                     text: "textRIPTION"
    //                 },
    //             ]
    //         },
    //         {
    //             heading: "People & Community",
    //             itemList: [
    //                         {
    //                     title: "title",
    //                     text: "textRIPTION"
    //                 },
    //                 {
    //                     title: "title",
    //                     text: "textRIPTION"
    //                 },
    //             ],
    //         },
    //     ]
    // },
]

export const hardSkills: Item[] = [
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