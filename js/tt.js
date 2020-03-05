const errorsMsg = document.querySelectorAll(".error");
const errorsPassMsg = document.querySelector(".error");
const errorsCarrMsg = document.querySelector(".carr-error");
const errorsBedMsg = document.querySelector(".bed-error");
const errorsTeaMsg = document.querySelector(".tea-error");
const errorsDinnerMsg = document.querySelector(".dinner-error");
const errorsDistanceMsg = document.querySelector(".dist-error");
const errorsPassMsg1 = document.querySelector(".error1");
const errorsPassMsg2 = document.querySelector(".error2");
const paramBlock = document.querySelector(".param-section");
const resultBlock = document.querySelector(".result-block");
const orderForm = document.querySelector(".order-form");
const passField = document.getElementById("passNumber");
const carrType = document.getElementById("typeCarriage");
const bedField = document.getElementById("bedNumber");
const teaField = document.getElementById("teaNumber");
const dinnerField = document.getElementById("dinnerNumber");
const distanceField = document.getElementById("distance");
const normalPrice = document.querySelector(".normal-price");
const discountSection = document.querySelector(".discount-section");
const resultSection = document.querySelector(".result-price");
const messageSection = document.querySelector(".message-section");
const btnBlock = document.querySelector(".result-block .btn-block");
let priceObj = {};
let price = 0;
const carriageObj = [
	{'type':'L', name:'Luxury', value: 1000 },
	{'type':'C', name:'Gold', value:  800},
	{'type':'RS', name:'Silver', value: 600 },
	{'type':'SP', name:'Bronze', value: 400 }
];

function setPassengersCount() {
	var fieldValue = passField.value;
	if (parseInt(fieldValue) === "" || Number.isInteger(+fieldValue) === false) {
		errorsPassMsg.hidden = false;
	}
	if (isNaN(fieldValue === true)) {
		errorsPassMsg1.hidden = false;
	} else if (fieldValue < 0) {
		errorsPassMsg2.hidden = false;
	} else {
		priceObj["passNumb"] = fieldValue;
	}
}

function setCarriage(event) {
	var fieldValue = carrType.value;
	for (var i = 0; i < carriageObj.length; i++) {
		if (carriageObj[i].type === fieldValue) {
			priceObj["carrType"] = carriageObj[i].value;
		} else {
			priceObj["carrType"] = 1;
		}
	}
}

function setBed() {
	var fieldValue = bedField.value;
	if (priceObj["passNumb"] >= fieldValue) {
		priceObj["bedNumb"] = fieldValue;
	} else {
		errorsBedMsg.hidden = false;
	}
}

function setFood (field, errorElem, priceObjName) {
	let fieldValue = field.value;
	if (parseInt(fieldValue) === "" || Number.isInteger(+fieldValue) === false) {
		errorElem.hidden = false;
	}
	if (fieldValue < 0 || fieldValue > priceObj["passNumb"] * 2) {
		errorElem.hidden = false;
	} else {
		priceObj[priceObjName] = fieldValue;
	}
}

function setDistance(event) {
	var fieldValue = distanceField.value;
	if (parseInt(fieldValue) === "") {
		errorsDistanceMsg.hidden = false;
	} else {
		if (fieldValue <= 0) {
			errorsDistanceMsg.hidden = false;
		} else {
			priceObj["distance"] = fieldValue;
		}
	}
}


function getPrice (event) {
	let carrValue = carrType.value;
	let fieldValueArray = [passField.value, carrType.value, bedField.value, distanceField.value,
		teaField.value, dinnerField.value];
	let priceValidFlag;
	if (carrValue === "") {
		errorsCarrMsg.hidden = false;
	}
	document.querySelectorAll(".field-row").forEach(function (element, index) {
		element.querySelectorAll("input").forEach(function (elem) {
			if (elem.value === "") {
				errorsMsg[index].hidden = false;
			}
		});
	});
	for (let i = 0; i < fieldValueArray.length; i++) {
		if (fieldValueArray[i] !== "") {
			priceValidFlag = true;
		} else {
			priceValidFlag = false
		}
	}
	if (priceValidFlag) {
		price = ((priceObj["passNumb"] * priceObj["distance"] + priceObj["teaNumb"]*20 +
		priceObj["dinnerNumb"]*100 + priceObj["bedNumb"]*15) * priceObj["carrType"]).toFixed(2);
		resultSection.innerHTML += '<p><strong>' + price + ' KSH </strong></p>';
		paramBlock.hidden = true;
		resultBlock.hidden = false;
	}
	event.preventDefault();
}

function setTicket(event) {
	for (let i = 0; i < carriageObj.length; i++) {
		if (carriageObj[i].value === priceObj["carrType"]) {
			priceObj["carrType"] = carriageObj[i].name;
		}
	}
	normalPrice.innerHTML+='<p><strong>Your order is:</strong></p>';
	normalPrice.innerHTML+='<p><strong>' + priceObj["passNumb"] + ' ' + priceObj["carrType"] + ' tickets with</strong></p>';
	normalPrice.innerHTML+='<p><strong>' + priceObj["teaNumb"] + ' Drinks served, ' + priceObj["dinnerNumb"] + ' snacks served, ' +
	priceObj["bedNumb"] + 'no of tables booked ' + priceObj["distance"] + ' for arrival at am/pm</strong></p>';
	btnBlock.hidden = true;
	event.preventDefault();
}

function showDiscount(event) {
	if (discountSection.innerHTML === "") {
		price = price * 0.8;
		resultSection.hidden = true;
		discountSection.innerHTML += '<p><strong>' + price + ' KSH </strong></p>';
		discountSection.innerHTML += '<p><strong>Get discount 20%</strong></p>';
	} else {
		messageSection.innerHTML += '<p><strong>Buy!</strong></p>';
		discountSection.hidden = true;
		resultBlock.hidden = true;
	}
	event.preventDefault();
}

(function () {
	for (let i = 0; i < errorsMsg.length; i++) {
		errorsMsg[i].hidden = true;
	}
	errorsPassMsg1.hidden = true;
	errorsPassMsg2.hidden = true;
	resultBlock.hidden = true;
	passField.addEventListener('change', setPassengersCount);
	carrType.addEventListener('change', setCarriage);
	bedField.addEventListener('change', setBed);
	teaField.addEventListener('change', () => { setFood (teaField, errorsTeaMsg, "teaNumb");});
	dinnerField.addEventListener('change', () => { setFood (dinnerField, errorsDinnerMsg, "dinnerNumb");});
	distanceField.addEventListener('change', setDistance);
	document.querySelector(".count").addEventListener('click', getPrice);
	document.querySelector(".order").addEventListener('click', setTicket);
	document.querySelector(".btn-cancel").addEventListener('click', showDiscount);
})();