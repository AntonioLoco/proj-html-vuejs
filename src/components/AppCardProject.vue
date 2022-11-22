<script>
export default{
    name: "AppCardProject",
    props: {
        project: Object
    },
    methods: {
        getImage(imagePath){
            return new URL(imagePath, import.meta.url).href
        }
    },
}
</script>

<template>
    <a :href="project.href" class="project-card"> 
        <img :src="getImage(`../assets/img/${project.img}.jpg`)" :alt="project.name">
        <div class="project-card-description">
            <h3>{{project.name}}</h3>
            <p>{{project.description}}</p>
        </div>
    </a>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.project-card{
        display: inline-block;
        width: 300px;
        background-color: $background-white;
        border-radius: 20px;
        box-shadow: 5px 5px 11px 4px rgba(0,0,0,0.24);
        cursor: pointer;

        img{
            max-width: 100%;
            border-radius: 20px;
        }

        &-description{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.2em 1em;

            h3{
                font-size: 1rem;
                margin-bottom: 0;
            }

            p{
                font-size: .8rem;
                margin-bottom: 0;
            }
        }

        &:hover{
            background: $background-btn-orange;
            color: $text-white;
            transition: all .2s ease-in-out;
        }
    }
</style>