export default function getPath(text: string) {
    switch (text) {
        case 'desktop':
            return "models/desktop_pc/scene.gltf";
        case 'earth':
            return "models/planet/scene.gltf";
    }
};