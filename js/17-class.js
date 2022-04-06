/*
CLASS: savybiu ir metodu junginys/grupe.
Savybes - kintamieji (info);
Metodai - funkcionalumas;

Klases - receptura;
Objektas - pagal receptura pagamintas konkretus/apciuopiamas dalykas;
*/

class Bankomatas {
    constructor(street, color) {
        this.street = street;
        this.color = color;
        this.turnedOn = false;
        this.money = 0;
    }

    switchOn() {
        this.turnedOn = true;
        console.log(`${this.street}: bankomatas ijungtas`);
    }

    switchOff() {
        this.turnedOn = false;
        console.log(`${this.street}: bankomatas isjungtas`);
    }

    cashIn(money) {
        if (!this.turnedOn) {
            console.log(this.street, 'Panasu, jog nera elektros... ⚡⚡⚡');
            return;
        }
        if (typeof money !== 'number'
            || !isFinite(money)) {
            console.log(this.street, 'Nepanasu i tikra piniga 😡');
            return;
        }
        if (money <= 0) {
            console.log(this.street, 'Minusiniu pinigu neegzistuoja 😡');
            return;
        }

        this.money += money;
        console.log(`${this.street}: inesta ${money} pinigu.`);
    }

    cashOut(money) {
        if (!this.turnedOn) {
            console.log(this.street, 'Panasu, jog nera elektros... ⚡⚡⚡');
            return;
        }
        if (typeof money !== 'number'
            || !isFinite(money)) {
            console.log(this.street, 'Nepanasu i tikra piniga 😡');
            return;
        }
        if (money <= 0) {
            console.log(this.street, 'Minusiniu pinigu neegzistuoja 😡');
            return;
        }
        if (this.money < money) {
            console.log(this.street, 'Bankomate siuo metu nera tokios sumos 😭');
            return;
        }

        this.money -= money;
        console.log(`${this.street}: isgryninta ${money} pinigu.`);
    }

    status() {
        console.log(`${this.street}: siuo metu pinigu likutis yra ${this.money}`);
    }
}

const bankomatas1 = new Bankomatas('Didzioji g. 2', 'red');
const bankomatas2 = new Bankomatas('Mazoji g. 3', 'blue');

bankomatas1.switchOn();
bankomatas2.switchOn();

bankomatas1.cashIn(true);
bankomatas1.cashIn(5);
bankomatas2.cashIn(777);
bankomatas1.cashIn(5);
bankomatas1.cashIn(5);
bankomatas2.cashIn(3);

bankomatas1.cashOut(9);
bankomatas2.cashOut(9);
bankomatas1.cashOut(9);
bankomatas2.cashOut(9);

bankomatas1.status();
bankomatas2.status();