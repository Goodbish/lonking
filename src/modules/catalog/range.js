const rangeCost = document.getElementById("cost");
const rangePrepayment = document.getElementById("prepayment");
const rangeDate = document.getElementById("date");

rangesliderJs.create(rangeCost, {
    min: 0,
    max: 50000000,
    value: 3600000,
    onInit: (value) => {
        setRangeValue(rangeCost, value);
    },
    onSlide: (value) => {
        setRangeValue(rangeCost, value);
    },
});

rangesliderJs.create(rangePrepayment, {
    min: 0,
    max: 50,
    value: 30,
    onInit: (value) => {
        setRangeValue(rangePrepayment, value);
    },
    onSlide: (value) => {
        setRangeValue(rangePrepayment, value);
    },
});

rangesliderJs.create(rangeDate, {
    min: 0,
    max: 60,
    value: 36,
    onInit: (value) => {
        setRangeValue(rangeDate, value);
    },
    onSlide: (value) => {
        setRangeValue(rangeDate, value);
    },
});

function setRangeValue (node, value) {
    const id = node.id;
    const result = numberWithSpaces(value);
    document.querySelector(`.calculator__range-input[data-range="${id}"]`).value = result;
}

function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

