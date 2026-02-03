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
        main: getAssetPath("LOGO HEADER copy.webp"),
        square: getAssetPath("logo.webp"),
        whatsapp: getAssetPath("whatsapp.webp"),
    },
    hero: {
        banner: getAssetPath("hp-banner.webp"),
        banner2: getAssetPath("banner 2.webp"),
        banner3: getAssetPath("banner 3 copy.webp"),
        reception: getAssetPath("assets/hero/reception.webp"),
        specialist1: getAssetPath("assets/hero/specialist-1.webp"),
        specialist2: getAssetPath("assets/hero/specialist-2.webp"),
        specialist3: getAssetPath("assets/hero/nurturing-growth.webp"),
        aboutHero: getAssetPath("about banner 4 copy.webp"),
        galleryHero: getAssetPath("gallery-hero.webp"),
    },
    videos: {
        hero: {
            mp4: getAssetPath("assets/videos/hero-bg.mp4"),
            webm: getAssetPath("assets/videos/hero-bg.webm"),
            poster: getAssetPath("assets/videos/posters/hero-bg.webp"),
        },
        showcase1: {
            mp4: getAssetPath("assets/videos/showcase-1.mp4"),
            webm: getAssetPath("assets/videos/showcase-1.webm"),
            poster: getAssetPath("assets/videos/posters/showcase-1.webp"),
        },
        showcase2: {
            mp4: getAssetPath("assets/videos/showcase-2.mp4"),
            webm: getAssetPath("assets/videos/showcase-2.webm"),
            poster: getAssetPath("assets/videos/posters/showcase-2.webp"),
        },
        showcase3: {
            mp4: getAssetPath("assets/videos/showcase-3.mp4"),
            webm: getAssetPath("assets/videos/showcase-3.webm"),
            poster: getAssetPath("assets/videos/posters/showcase-3.webp"),
        },
        showcase4: {
            mp4: getAssetPath("assets/videos/showcase-4.mp4"),
            webm: getAssetPath("assets/videos/showcase-4.mp4"),
            poster: getAssetPath("assets/videos/posters/showcase-4.webp"),
        },
        showcase5: {
            mp4: getAssetPath("assets/videos/showcase-5.mp4"),
            webm: getAssetPath("assets/videos/showcase-5.mp4"),
            poster: getAssetPath("assets/videos/posters/showcase-5.webp"),
        },
        showcase6: {
            mp4: getAssetPath("assets/videos/showcase-6.mp4"),
            webm: getAssetPath("assets/videos/showcase-6.mp4"),
            poster: getAssetPath("assets/videos/posters/showcase-6.webp"),
        },
        showcase7: {
            mp4: getAssetPath("assets/videos/showcase-7.mp4"),
            webm: getAssetPath("assets/videos/showcase-7.mp4"),
            poster: getAssetPath("assets/videos/posters/showcase-7.webp"),
        },
        showcase8: {
            mp4: getAssetPath("assets/videos/showcase-8.mp4"),
            webm: getAssetPath("assets/videos/showcase-8.mp4"),
            poster: getAssetPath("assets/videos/posters/showcase-8.webp"),
        },
        showcase9: {
            mp4: getAssetPath("assets/videos/showcase-9.mp4"),
            webm: getAssetPath("assets/videos/showcase-9.mp4"),
            poster: getAssetPath("assets/videos/posters/showcase-9.webp"),
        },
        showcase10: {
            mp4: getAssetPath("assets/videos/showcase-10.mp4"),
            webm: getAssetPath("assets/videos/showcase-10.mp4"),
            poster: getAssetPath("assets/videos/posters/showcase-10.webp"),
        },
        showcase11: {
            mp4: getAssetPath("assets/videos/showcase-11.mp4"),
            webm: getAssetPath("assets/videos/showcase-11.mp4"),
            poster: getAssetPath("assets/videos/posters/showcase-10.webp"), // Fallback to existing poster
        },
        showcase12: {
            mp4: getAssetPath("assets/videos/showcase-12.mp4"),
            webm: getAssetPath("assets/videos/showcase-12.mp4"),
            poster: getAssetPath("assets/videos/posters/showcase-9.webp"), // Fallback to existing poster
        },
        showcase13: {
            mp4: getAssetPath("assets/videos/showcase-13.mp4"),
            webm: getAssetPath("assets/videos/showcase-13.mp4"),
            poster: getAssetPath("assets/videos/posters/showcase-13.webp"),
        },
        showcase14: {
            mp4: getAssetPath("assets/videos/showcase-14.mp4"),
            webm: getAssetPath("assets/videos/showcase-14.mp4"),
            poster: getAssetPath("assets/videos/posters/showcase-14.webp"),
        },
        showcase15: {
            mp4: getAssetPath("assets/videos/showcase-15.mp4"),
            webm: getAssetPath("assets/videos/showcase-15.mp4"),
            poster: getAssetPath("assets/videos/posters/showcase-15.webp"),
        },
        showcase16: {
            mp4: getAssetPath("assets/videos/showcase-16.mp4"),
            webm: getAssetPath("assets/videos/showcase-16.mp4"),
            poster: getAssetPath("assets/videos/posters/showcase-16.webp"),
        },
        showcase17: {
            mp4: getAssetPath("assets/videos/showcase-17.mp4"),
            webm: getAssetPath("assets/videos/showcase-17.mp4"),
            poster: getAssetPath("assets/videos/posters/showcase-17.webp"),
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
    gallery: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 13, 14, 15, 16, 17,
        21, 22, 23, 24, 25, 26, 27,
        29, 30, 31, 34, 35, 37, 39, 40, 41, 43
    ].map((i) => getAssetPath(`assets/gallery/clinic-${i}.webp`)),
};
