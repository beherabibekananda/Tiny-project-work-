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
        occupationalTherapy: getAssetPath("assets/gallery/Occupational Therapy banner copy.webp"),
        speechTherapy: getAssetPath("assets/gallery/Speech Therapy banner copy.webp"),
        behaviourTherapy: getAssetPath("assets/services/behaviour-therapy.webp"),
        physiotherapy: getAssetPath("assets/gallery/Physiotherapy banner copy.webp"),
        specialEducation: getAssetPath("assets/gallery/Special Education  banner copy.webp"),
        sensoryIntegration: getAssetPath("assets/gallery/Sensory Integration  banner copy.webp"),
        prostheticsOrthotics: getAssetPath("assets/gallery/Prosthetics and Orthotics  banner copy (1).webp"),
    },
    gallery: [
        1, 2, 3, 4, 5, 6, 7, 8, 9,
        11, 12, 13, 14, 15, 16, 17,
        21, 23, 24, 27,
        29, 30, 34, 37, 39, 40, 41, 43
    ].map((i) => getAssetPath(`assets/gallery/clinic-${i}.webp`)),
    // Portrait images (no rotation needed): clinic-1, clinic-9, clinic-21, clinic-24, clinic-34, clinic-37, clinic-39, clinic-40, clinic-41, clinic-43
    // All other images are landscape and need 90° rotation
    portraitImages: [1, 9, 21, 24, 34, 37, 39, 40, 41, 43],
};
