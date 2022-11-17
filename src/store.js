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
    ]
})