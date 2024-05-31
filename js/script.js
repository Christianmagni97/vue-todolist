const { createApp } = Vue

createApp({
    data() {
        return {
            albumList: [
                {
                    text: "Nevermind",
                    done: false
                },
                {
                    text: "High Voltage",
                    done: false
                },
                {
                    text: "Stadium arcadium",
                    done: false
                },
                {
                    text: "Abraxas",
                    done: false
                },
                {
                    text: "Ghost stories",
                    done: false
                },
            ],

            listItemText: "", 
        }
    },
    methods: {
        
}) mount ('#app');