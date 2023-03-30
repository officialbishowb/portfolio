<template>

        <div v-for="skill in skills" class="skill col-lg-3 col-md-6">
            <h4 class="bb-second-accent-color bold">{{skill.name}}</h4>
            <p v-html="skill.description"></p>
        </div>

</template>


<script>

export default {
    name: 'SkillsCard',
    data() {
        return {
            skills: []
        }
    },

    methods: {
        saveSkills() {
            const my_skills = {
                "html": "Well, without HTML I would not be able to create this website. So I'm not that good at it, but I have more than the basic knowledge to create such websites.<br>PS: There are many tags that I have never used :| ",
                "css": "You all know how this website would look like without CSS. So yes, I'm good enough at CSS to design simple websites. But when it comes to animations or even making pages responsive, I need a little more time. ",
                "javascript":"I would like to say that I have more than basic knowledge of javascript. Of course, I have never built complex websites that require advanced javascript.",
                "php":"PHP was my first backend language. Many people say PHP is a dying language. I disagree. I think I am really good at PHP, but here it's just like javascript... I have never created complex websites to test my PHP skills.",
                "python":"Python, my favorite language. Python is very good for beginners. I use it for different things Telegram Bot, Scripts, and many more. However, I still need to learn many things, like Python decorators, working more with Asynchronous and so on. ",
                "java":"I need to learn Java for my school. So yes, not my favorite, but I have the basic knowledge.",
                "sql":"If you work with databases, you need SQL knowledge. Joins still confuse me :|",
                "c#":"C#, my very first step into programming. It taught me some basic programming skills and I really like WinForm. However, I don't have any project idea for it at the moment."
            }

            for(var key in my_skills) {
                this.skills.push({
                    name: key,
                    description: my_skills[key]
                })
            }

        }

    },
    mounted() {
        this.saveSkills();
    }
}


</script>

<style scoped>
.skill {
    border: 1px solid var(--bb-accent-color);
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
}
.skill:hover{
    background-color: var(--bb-accent-color);
    color: var(--bb-background-color);
}
</style>