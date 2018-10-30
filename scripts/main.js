let dealer = {
    currentDeck: [],
    suits: ['D', 'C', 'H', 'S'],
    faces: ['2','3','4','5','6','7','8','9','10','J','Q','K','A'],
    cardOutputContainer: document.getElementById('output'),
    result: '',
    createNewDeck: function() {
        let tempDeck = [];

        for(let i = 0; i < this.faces.length; i++) {
            for (let y = 0; y < this.suits.length; y++) {
                tempDeck.push(this.faces[i] + this.suits[y])
            }
        }

        for(let i = tempDeck.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = tempDeck[i];
            tempDeck[i] = tempDeck[j];
            tempDeck[j] = temp;
        }

        this.currentDeck =  tempDeck;
    },
    deal: function(number) {
        this.result = '';

        this.currentDeck.length === 0 && this.createNewDeck();

        if (this.currentDeck.length >= number) {
            for(let i = 0; i < number; i++) {
                this.result += this.currentDeck[i] + ' ';
            }
            this.currentDeck.splice(0, number);
        } else {
            let difference = this.currentDeck.length - number;

            for (let i = 0; i < (number + difference); i++) {
                this.result += this.currentDeck[i] + ' ';
            }

            this.createNewDeck();

            for (let j = 0; j < (-difference); j++) {
                this.result += this.currentDeck[j] + ' ';
            }
            this.currentDeck.splice(0, (-difference));
        }

        this.cardOutputContainer.innerHTML = this.result;
        console.log(this.currentDeck);
    }
};

let dealBtn = document.getElementById('dealBtn');
dealBtn.addEventListener('click', function(){
    dealer.deal(5);
});