import type { ComponentType } from "svelte";
import Home from "../home/home.svelte";
import Journey from "../journey/journey.svelte";

export interface NavPage {
    title: string;
    pathName: string;
    component: ComponentType;
}

export const base = "/Portfolio/"
export const pages: NavPage[] = [
    {
        title: "Home",
        pathName: "",
        component: Home,
    },
    {
        title: "My Journey",
        pathName: "journey",
        component: Journey,
    },
]

interface captionedImage {
    caption: String;

}

export enum ItemDisplayType {
    compressed,
    preview,
    fullview,
}

export interface Item {
    name: String;
    caption?: String;
    desc: String;
    img?: captionedImage;
}

export const items: { [id: string]: Item; } = {
    "n": {
        name: "Name",
        caption: "caption",
        desc: "Desc",
    },
}