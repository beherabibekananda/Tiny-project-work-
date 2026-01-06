/**
 * Asset Configuration
 * 
 * Centralized paths for all site assets to allow for easy CDN switching.
 * To use a CDN, update ASSET_BASE_URL to your CDN endpoint (e.g., https://cdn.tinytriumph.com).
 */

const ASSET_BASE_URL = ""; // Leave empty for local public folder usage

export const getAssetPath = (path: string) => {
    // Ensure the path doesn't start with a slash if BASE_URL already has one
    const cleanPath = path.startsWith("/") ? path.slice(1) : path;
    return ASSET_BASE_URL ? `${ASSET_BASE_URL}/${cleanPath}` : `/${cleanPath}`;
};

export const assets = {
    logos: {
        main: getAssetPath("logo.webp"),
        whatsapp: getAssetPath("whatsapp.webp"),
    },
    hero: {
        reception: getAssetPath("assets/hero/reception.webp"),
        specialist1: getAssetPath("assets/hero/specialist-1.webp"),
        specialist2: getAssetPath("assets/hero/specialist-2.webp"),
        specialist3: getAssetPath("assets/hero/specialist-3.webp"),
    },
    videos: {
        hero: {
            mp4: getAssetPath("assets/videos/hero-bg.mp4"),
        },
        showcase1: {
            mp4: getAssetPath("assets/videos/showcase-1.mp4"),
        },
        showcase2: {
            mp4: getAssetPath("assets/videos/showcase-2.mp4"),
        },
        showcase3: {
            mp4: getAssetPath("assets/videos/showcase-3.mp4"),
        },
    },
    services: {
        occupationalTherapy: getAssetPath("assets/services/occupational-therapy.webp"),
        speechTherapy: getAssetPath("assets/services/speech-therapy.webp"),
        behaviourTherapy: getAssetPath("assets/services/behaviour-therapy.webp"),
        physiotherapy: getAssetPath("assets/services/physiotherapy.webp"),
        specialEducation: getAssetPath("assets/services/special-education.webp"),
        sensoryIntegration: getAssetPath("assets/services/sensory-integration.webp"),
    },
    gallery: Array.from({ length: 23 }, (_, i) => getAssetPath(`assets/gallery/clinic-${i + 1}.webp`)),
};
