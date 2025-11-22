export const questions = [
    {
        id: 1,
        text: "What is your typical daily driving distance?",
        options: [
            { id: 'short', text: "Less than 50 km (City Commute)", score: { city: 3, budget: 1 } },
            { id: 'medium', text: "50-150 km (Suburban Commute)", score: { suv: 1, sedan: 2 } },
            { id: 'long', text: "More than 150 km (Long Commute/Regional)", score: { range: 3, luxury: 1 } }
        ]
    },
    {
        id: 2,
        text: "How many people do you usually transport?",
        options: [
            { id: 'solo', text: "Just me (and maybe a plus one)", score: { sedan: 2, performance: 1 } },
            { id: 'family', text: "3-4 people (Small Family)", score: { suv: 2, sedan: 1 } },
            { id: 'large', text: "5+ people (Large Family/School Run)", score: { suv: 3, luxury: 1 } }
        ]
    },
    {
        id: 3,
        text: "What is your budget range (AUD)?",
        options: [
            { id: 'budget', text: "Up to $40,000", score: { budget: 3, city: 1 } },
            { id: 'mid_low', text: "$40,000 - $60,000", score: { sedan: 1, suv: 1, budget: 1 } },
            { id: 'mid_high', text: "$60,000 - $90,000", score: { luxury: 1, performance: 1, sedan: 2 } },
            { id: 'luxury', text: "Over $90,000", score: { luxury: 3, performance: 2 } }
        ]
    },
    {
        id: 4,
        text: "What's your top priority in a car?",
        options: [
            { id: 'tech', text: "Tech & Autonomy", score: { luxury: 2, performance: 1 } },
            { id: 'comfort', text: "Comfort & Interior Quality", score: { luxury: 2, suv: 1 } },
            { id: 'speed', text: "Acceleration & Driving Dynamics", score: { performance: 3 } },
            { id: 'value', text: "Value for Money & Warranty", score: { budget: 2, city: 1 } }
        ]
    },
    {
        id: 5,
        text: "Charging situation?",
        options: [
            { id: 'yes', text: "Home charging available (Garage/Carport)", score: { range: 0 } },
            { id: 'no', text: "Street parking / Rely on public chargers", score: { range: 3 } }
        ]
    }
];

export const recommendations = {
    city: {
        title: "The City Slicker",
        description: "Perfect for zipping around town. Easy to park and efficient.",
        examples: [
            "BYD Dolphin Dynamic",
            "GWM Ora",
            "MG MG4 Excite 51",
            "Fiat 500e",
            "Mini Cooper SE"
        ]
    },
    sedan: {
        title: "The All-Rounder Sedan",
        description: "A balanced choice offering great range and driving dynamics.",
        examples: [
            "Tesla Model 3 (RWD)",
            "Hyundai Ioniq 6",
            "BYD Seal",
            "Polestar 2 (Long Range)",
            "BMW i4 (eDrive35, M50)"
        ]
    },
    suv: {
        title: "The Family SUV",
        description: "Space and versatility for the whole family.",
        examples: [
            "Tesla Model Y (Long Range)",
            "BYD Atto 3",
            "Kia EV6 (Air, GT-Line)",
            "Volvo XC40 Recharge / EX40",
            "Ford Mustang Mach-E",
            "Subaru Solterra"
        ]
    },
    luxury: {
        title: "The Premium Cruiser",
        description: "Top-tier comfort, tech, and prestige.",
        examples: [
            "Kia EV9",
            "BMW iX (xDrive40, xDrive45)",
            "Polestar 3 Long Range Dual Motor",
            "Mercedes-Benz EQB250",
            "Genesis GV60"
        ]
    },
    performance: {
        title: "The Thrill Seeker",
        description: "Instant torque and sharp handling for the driving enthusiast.",
        examples: [
            "Kia EV6 GT",
            "Hyundai Ioniq 5 N",
            "Tesla Model 3 Performance",
            "Porsche Taycan",
            "Audi e-tron GT"
        ]
    },
    budget: {
        title: "The Value Champion",
        description: "Affordable entry into the EV world without compromising on essentials.",
        note: "Tip: Consider 2-4 year old second-hand models (e.g., Nissan Leaf, Hyundai Ioniq, Tesla Model 3) as a cost-effective alternative to buying new.",
        examples: [
            "GWM Ora",
            "Chery OMODA E5",
            "Hyundai INSTER",
            "MG MG4 Excite 51",
            "BYD Dolphin Dynamic",
            "Leapmotor C10"
        ]
    },
    range: {
        title: "The Long Distance Tourer",
        description: "Maximize your distance between charges for road trips and regional driving.",
        examples: [
            "Polestar 2 Long Range",
            "Tesla Model 3 Long Range",
            "Hyundai Ioniq 6",
            "Mustang Mach-E Premium",
            "BMW iX xDrive50"
        ]
    }
};
