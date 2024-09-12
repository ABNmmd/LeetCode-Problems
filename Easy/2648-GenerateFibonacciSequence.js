/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
    let x1 = 0;
    let x2 = 1;
    yield x1;
    yield x2;
    while (true) {
        let tmp = x1 + x2;
        x1 = x2;
        x2 = tmp;
        yield tmp;
    }
};


const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1