const winkelwagen = {
    template: '#winkelwagenTemplate',
    data: function () {
        return {
            pathSmall: "images/small/",
            pathBig: "images/big/",
            items: []
        }
    },
    methods: {
        toonGroteFoto: function (src) {
            window.open(this.pathBig + src);
        },
        verwijder: function (index) {
            this.items.splice(index, 1);
            this.saveLocalStorageWinkelwagen();
        },
        aantalAanpassing: function (index) {
            if (this.items[index].besteld == 0) {
                this.items.splice(index, 1);
            }
            this.saveLocalStorageWinkelwagen()
        },
        saveLocalStorageWinkelwagen: function () {
            let temp = this.items.filter((item) => item.besteld !== 0);
            localStorage.setItem("winkelwagen", JSON.stringify(temp));
        }
    },
    computed: {
        totalePrijs: function () {
            let totaal = 0;
            this.items.forEach(item => {
                if (item.besteld > 0) {
                    totaal += item.besteld * item.prijs
                }
            })
            return totaal
        },
        totaalAantalItems: function () {
            let totaal = 0;

            if (this.items.length > 0) {
                this.items.forEach(item => {
                    if (item.besteld > 0) {
                        totaal += parseInt(item.besteld)
                    }
                })
            }
            return this.$root.aantalInWinkelwagen = totaal
        }
    },
    mounted() {
        if (localStorage.getItem("winkelwagen")) {
            this.items = JSON.parse(localStorage.getItem("winkelwagen"))
        }
        if (localStorage.getItem("showCookieMelding")) {
            this.$root.showCookieMelding = !localStorage.getItem("showCookieMelding")
        }
        else {
            this.$root.showCookieMelding = true
        }
    }
}