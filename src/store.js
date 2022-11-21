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
    ],
    blogLists: [
        {
            img: "comment",
            name: "Paul",
            message: {
                date: "April 21, 2019",
                title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed nemo rerum quae quidem enim commodi voluptatum. Laudantium expedita exercitationem blanditiis?"
            }
        },
        {
            img: "",
            name: "Paul",
            message: {
                date: "April 21, 2019",
                title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed nemo rerum quae quidem enim commodi voluptatum. Laudantium expedita exercitationem blanditiis?"
            }
        },
        {
            img: "",
            name: "Paul",
            message: {
                date: "April 21, 2019",
                title: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
                description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed nemo rerum quae quidem enim commodi voluptatum. Laudantium expedita exercitationem blanditiis?"
            }
        }
    ],
    testimonialList: [
        {
            fullName: "Michkel Angel",
            employment: "Marketing Managment",
            urlImg: "michkel-testimonial",
            rating: 3,
            comment: "When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand "
        },
        {
            fullName: "Fabiola Angel",
            employment: "Marketing Managment",
            urlImg: "fabiola-testimonial",
            rating: 3,
            comment: "When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand "
        },
        {
            fullName: "Federica Angel",
            employment: "Marketing Managment",
            urlImg: "federica-testimonial",
            rating: 3,
            comment: "When, while lovely valley teems with vapour around meand meridian sun strikes the upper impenetrable foliage of my trees, and but a thousand "
        }
    ],
    AdvertisingList: [
        {
            name: "Golden",
            imgUrl: "client-1"
        },
        {
            name: "Sweety",
            imgUrl: "client-2"
        },
        {
            name: "Fastlane",
            imgUrl: "client-3"
        },
        {
            name: "Mighty Furnitures",
            imgUrl: "client-4"
        },
        {
            name: "Jack Roller",
            imgUrl: "client-5"
        }
    ],
    footerLinks: [
        {
            title: "Resources",
            links: [
                {
                    name: "Art Design",
                    href: "/artdesign"
                },
                {
                    name: "Computer",
                    href: "/computer"
                },
                {
                    name: "IT News",
                    href: "/itnews"
                },
                {
                    name: "Networking",
                    href: "/networking"
                },
                {
                    name: "web Security",
                    href: "/websicurity"
                }
            ]
        },
        {
            title: "Contact Us",
            links: [
                {
                    name: "Address",
                    description: "Patricia C. Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051"
                },
                {
                    name: "Phone",
                    description: "+99 (0) 101 0000 888"
                },
                {
                    name: "Email",
                    description: "info@yourdimain.com"
                }
            ]
        }
    ]
})