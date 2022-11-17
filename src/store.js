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
    ]
})