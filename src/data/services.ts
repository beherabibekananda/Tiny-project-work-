import {
    Users,
    MessageCircle,
    Brain,
    Activity,
    ClipboardList,
    Heart,
    Stethoscope,
    Shield,
    Zap,
    Star,
    Award
} from "lucide-react";

export interface Service {
    id: string;
    slug: string;
    icon: any;
    title: string;
    headline: string;
    description: string;
    longDescription: string;
    quote: string;
    bgColor: string;
    borderColor: string;
    textColor: string;
    iconColor: string;
    features: string[];
    clinicalInsights: string[];
    benefits: string[];
    image: string;
}

export const services: Service[] = [
    {
        id: "occupational-therapy",
        slug: "occupational-therapy",
        icon: Users,
        title: "Occupational Therapy",
        headline: "Empowering Independence Through Play & Daily Living",
        description: "Helps children build daily living and motor skills for independence.",
        longDescription: "Occupational therapy (OT) at Tiny Triumph is more than just skill-building; it's about unlocking a child's potential to navigate their world with confidence. Our boutique approach blends clinical precision with a playful environment, focusing on the 'occupations' of childhood—play, learning, and self-care. We treat the whole child, ensuring they don't just reach milestones, but thrive in their everyday environments.",
        quote: "Helping every child master the art of everyday living.",
        bgColor: "bg-orange-50/90",
        borderColor: "border-orange-200",
        textColor: "text-orange-700",
        iconColor: "text-orange-600",
        features: [
            "Precision Fine Motor Strengthening",
            "Functional Daily Living Mastery",
            "Sensory-Motor Integration",
            "Executive Functioning & Focus",
            "Social-Emotional Development",
            "Custom School Readiness Pathways"
        ],
        clinicalInsights: [
            "Advanced Sensory Integration Protocols",
            "Neurodevelopmental Treatment (NDT) approach",
            "Cognitive Orientation to daily Occupational Performance (CO-OP)"
        ],
        benefits: [
            "Seamless independence in self-care routines",
            "Enhanced handwriting and classroom endurance",
            "Improved emotional regulation and sensory comfort"
        ],
        image: "/assets/gallery/clinic-3.webp"
    },
    {
        id: "speech-therapy",
        slug: "speech-therapy",
        icon: MessageCircle,
        title: "Speech Therapy",
        headline: "Finding Their Voice, Connecting Their World",
        description: "Improves communication and speech abilities for better expression.",
        longDescription: "Communication is the heartbeat of human connection. Our Speech-Language Pathology program provides a premium, individualized journey for children finding their voice. Whether it's mastering the nuances of social interaction or overcoming complex language delays, our specialists use state-of-the-art diagnostic tools and creative therapies to turn silence into expression and hesitation into confidence.",
        quote: "Every child has a story to tell; we help them find the words.",
        bgColor: "bg-teal-50/90",
        borderColor: "border-teal-200",
        textColor: "text-teal-700",
        iconColor: "text-teal-600",
        features: [
            "Articulatory Precision Training",
            "Expressive & Receptive Language Expansion",
            "Social-Pragmatic Communication Groups",
            "Feeding & Oral Motor Specialization",
            "AAC & High-Tech Communication Support",
            "Auditory Processing Enhancement"
        ],
        clinicalInsights: [
            "Evidence-based Hanen Program methodologies",
            "PROMPT-certified therapy techniques",
            "Social Thinking® framework integration"
        ],
        benefits: [
            "Confident and clear verbal expression",
            "Deepened social bonds and peer interaction",
            "Total communication success across settings"
        ],
        image: "/assets/services/speech-therapy.webp"
    },
    {
        id: "behaviour-therapy",
        slug: "behaviour-therapy",
        icon: Brain,
        title: "Behaviour Therapy",
        headline: "Transforming Challenges into Growth & Connection",
        description: "Structured skill learning for behavioral development.",
        longDescription: "Our Behavioral Therapy program is rooted in compassion and evidence. We understand that behavior is communication, and our goal is to understand the language beneath the action. Using a boutique ABA (Applied Behavior Analysis) framework, we create positive, life-affirming interventions that help children replace frustration with functional skills, leading to a more harmonious life for the entire family.",
        quote: "Nurturing positive growth through understanding and support.",
        bgColor: "bg-rose-50/90",
        borderColor: "border-rose-200",
        textColor: "text-rose-700",
        iconColor: "text-rose-600",
        features: [
            "Functional Behavior Assessment (FBA)",
            "Positive Reinforcement Systems",
            "Emotional Literacy & Regulation",
            "Functional Communication Training",
            "Family-Centered Coaching",
            "Community Integration Support"
        ],
        clinicalInsights: [
            "Trauma-Informed Behavioral Care",
            "Naturalistic Developmental Behavioral Interventions",
            "Data-driven individualized progress mapping"
        ],
        benefits: [
            "Significant reduction in family stress",
            "Acquisition of vital functional life skills",
            "Improved social grace and emotional resilience"
        ],
        image: "/assets/services/behaviour-therapy.webp"
    },
    {
        id: "physiotherapy",
        slug: "physiotherapy",
        icon: Activity,
        title: "Physiotherapy",
        headline: "Movement with Purpose, Strength with Joy",
        description: "Support for movement, posture, strength, and coordination.",
        longDescription: "Pediatric Physiotherapy at Tiny Triumph is about the joy of movement. We help children build the physical foundation they need to explore their world. From correcting posture to building core stability and gross motor endurance, our physical therapists use advanced techniques and specialized equipment in a motivating, boutique setting to ensure every child can climb, run, and play with their peers.",
        quote: "Building strong foundations for active, happy childhoods.",
        bgColor: "bg-blue-50/90",
        borderColor: "border-blue-200",
        textColor: "text-blue-700",
        iconColor: "text-blue-600",
        features: [
            "Neuro-Motor Re-education",
            "Postural Alignment & Optimization",
            "Advanced Core Stability Training",
            "Gait Analysis & Walking Efficiency",
            "Pediatric Orthopedic Rehabilitation",
            "Functional Mobility Enhancement"
        ],
        clinicalInsights: [
            "Neurodevelopmental Treatment (NDT) certified",
            "Dynamic Elastometric Fabric Orthoses (DEFO) consultation",
            "Specialized pediatric equipment integration"
        ],
        benefits: [
            "Mastery of gross motor milestones",
            "Increased physical stamina for school and play",
            "Enhanced physical confidence and coordination"
        ],
        image: "/assets/services/physiotherapy.webp"
    },
    {
        id: "special-education",
        slug: "special-education",
        icon: ClipboardList,
        title: "Special Education",
        headline: "Tailored Learning for Unique Minds",
        description: "Tailored educational support for unique learning needs.",
        longDescription: "Our Special Education program bridges the gap between potential and performance. We believe that every child learns differently, and our mission is to find the key that unlocks their individual learning style. In our boutique classroom environments, we provide highly personalized instruction that builds academic competence while nurturing self-esteem and a lifelong love for learning.",
        quote: "Unlocking potential through personalized educational journeys.",
        bgColor: "bg-amber-50/90",
        borderColor: "border-amber-200",
        textColor: "text-amber-700",
        iconColor: "text-amber-600",
        features: [
            "Individualized Education Planning (IEP)",
            "Multisensory Literacy & Numeracy",
            "Assistive Technology Integration",
            "Cognitive & Executive Skill Building",
            "Holistic School Advocacy",
            "Transition & Life Skill Prep"
        ],
        clinicalInsights: [
            "Orton-Gillingham based literacy approaches",
            "Universal Design for Learning (UDL) framework",
            "Differentiated Instructional Design"
        ],
        benefits: [
            "Significant gains in academic confidence",
            "Mastery of personalized learning strategies",
            "Successful school transitions and integration"
        ],
        image: "/assets/services/special-education.webp"
    },
    {
        id: "sensory-integration",
        slug: "sensory-integration",
        icon: Heart,
        title: "Sensory Integration",
        headline: "Harmonizing the Senses, Calming the World",
        description: "Helping children process and respond to sensory input effectively.",
        longDescription: "The world can be an overwhelming place for a child with sensory processing challenges. Our Sensory Integration therapy provides a safe, high-end 'sensory gym' environment where children learn to organize and interpret the information from their bodies and the world around them. We focus on creating a balanced sensory profile that allows for better focus, emotional stability, and engagement in life's activities.",
        quote: "Finding balance in a world of sensory wonder.",
        bgColor: "bg-purple-50/90",
        borderColor: "border-purple-200",
        textColor: "text-purple-700",
        iconColor: "text-purple-600",
        features: [
            "Proprioceptive Deep Pressure Therapy",
            "Vestibular Equilibrium Training",
            "Tactile Desensitization Protocols",
            "Visual-Spatial Processing Skills",
            "Auditory Habituation Programs",
            "Oral-Sensory Integration"
        ],
        clinicalInsights: [
            "Ayres Sensory Integration® (ASI) standards",
            "Sensory Diet development and implementation",
            "Environmental modification strategies"
        ],
        benefits: [
            "Calmer, more regulated daily behavior",
            "Improved focus in loud or busy settings",
            "Greater comfort and joy in physical play"
        ],
        image: "/assets/services/sensory-integration.webp"
    }
];
