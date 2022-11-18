import { reactive } from "vue";

export const store = reactive({
    navigationLinks: [
        {
            name: "Home",
            href: "#home",
            active: true
        },
        {
            name: "About",
            href: "#about",
            active: false
        },
        {
            name: "Services",
            href: "#services",
            active: false
        },
        {
            name: "Blog",
            href: "#blog",
            active: false
        },
        {
            name: "Contact",
            href: "#contact",
            active: false
        },
        {
            name: "Portfolio",
            href: "#portfolio",
            active: false
        }
    ],
    ourServices: [
        {
            name: "Data Analysis",
            img: "Group-247",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere obcaecati sapiente repellendus eveniet harum eius cupiditate illum quis impedit unde."
        },
        {
            name: "SEO Optimization",
            img: "Group-567",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere obcaecati sapiente repellendus eveniet harum eius cupiditate illum quis impedit unde."
        },
        {
            name: "Security Data",
            img: "Group-538",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere obcaecati sapiente repellendus eveniet harum eius cupiditate illum quis impedit unde."
        },
        {
            name: "Branding Strategy",
            img: "Group-566",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere obcaecati sapiente repellendus eveniet harum eius cupiditate illum quis impedit unde."
        }
    ],
    projectList: [
        {
            name: "Purinky Products",
            href: "/purinky",
            img: "project-dry",
            description: "Digital Experience"
        },
        {
            name: "Satisfy Poster",
            href: "/satisfy",
            img: "project-satisfy",
            description: "Branding Strategy"
        },
        {
            name: "Basket of Flower",
            href: "/basket",
            img: "project-basket",
            description: "Branding Strategy" 
        },
        {
            name: "Mock Up",
            href: "/mockup",
            img: "project-mockup",
            description: "Digital Experience"
        },
        {
            name: "Satisfy Poster",
            href: "/satisfy",
            img: "project-satisfy",
            description: "Branding Strategy"
        }
    ],
    productList: [
        {
            name: "Designing",
            type: "process",
            price: 40,
            descriptionList: [
                {
                    title: "Creative",
                    description: "Design Enabled"
                },
                {
                    title: "Vibrant",
                    description: "Color Usage"
                },
                {
                    title: "Eye",
                    description: "Catching Design"
                },
                {
                    title: "Extreme",
                    description: "Typografy"
                },
                {
                    title: "Exceptional",
                    description: "Design"
                },
            ]
        },
        {
            name: "Developing",
            type: "productt",
            price: 60,
            descriptionList: [
                {
                    title: "Creative",
                    description: "Design Enabled"
                },
                {
                    title: "Vibrant",
                    description: "Color Usage"
                },
                {
                    title: "Eye",
                    description: "Catching Design"
                },
                {
                    title: "Extreme",
                    description: "Typografy"
                },
                {
                    title: "Exceptional",
                    description: "Design"
                },
            ]
        },
        {
            name: "Supporting",
            type: "clients",
            price: 80,
            descriptionList: [
                {
                    title: "Creative",
                    description: "Design Enabled"
                },
                {
                    title: "Vibrant",
                    description: "Color Usage"
                },
                {
                    title: "Eye",
                    description: "Catching Design"
                },
                {
                    title: "Extreme",
                    description: "Typografy"
                },
                {
                    title: "Exceptional",
                    description: "Design"
                },
            ]
        }
    ]
})