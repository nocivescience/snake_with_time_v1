let one, two;
function funcionOne() {
    one=1;
}
function funcionTwo() {
    funcionOne();
    two=one+10;
    console.log(two);
}
funcionTwo();