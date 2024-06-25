interface captionedImage {
    caption: String;

}

export enum ItemDisplayType {
    compressed,
    preview,
    fullview,
}

interface Item {
    name: String;
    caption: String;
    desc: String;
    img?: captionedImage;
}

export const items: { [id: string]: Item; } = {
    "n": {
        name: "Name",
        caption: "Caption",
        desc: "Desc",
    },
}