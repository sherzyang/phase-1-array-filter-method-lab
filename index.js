// // Code your solution here

function findMatching(drivers, name){
    let apple = item => item.toLowerCase() === name.toLowerCase();
    let list = drivers.filter(apple);
    return list
}

function fuzzyMatch(drivers,name) {
    return drivers.filter(item => item[0] === name[0])
}

function matchName(drivers, oneDriver){
    return drivers.filter(item => item.name === oneDriver);

}