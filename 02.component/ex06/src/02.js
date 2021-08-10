import fs from 'fs';
let state;
let updateOrder;

console.log("=violation==========================================");
state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}
updateOrder = state.order;
updateOrder.receive = '부산시 해운대구 우동';

console.log(state.order, updateOrder, state.order == updateOrder);

console.log("=1==================================================");

state = {
    order: JSON.parse(fs.readFileSync('./json/data.json').toString())
}
updateOrder = Object.assign({}, state.order, {receive: '부산시 해운대구 우동'});

console.log(state.order, updateOrder, state.order == updateOrder);