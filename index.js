console.log(`Test Loop : For vs ForEach vs For in`)

// list
var list = []
var ch = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
var num = 10000000
console.log('Prepare List data')
const start = new Date().getTime()
for (let i = 0; i < num; i++) {
    let msg = `#${i}${ch[i % ch.length]}${i}${Math.random() * num}%`
    list.push(`x`)
}
const useTime = new Date().getTime() - start
console.log(`Prepare List data -- End : ${useTime}`)

function testFor(items) {
    console.log('> Test FOR started !!')
    const start = new Date().getTime()
    let sum = 0
    for (let i = 0; i < items.length; i++) {
        sum += i
    }
    const useTime = new Date().getTime() - start

    return {
        'type': "for",
        'time': useTime,
        'check': sum
    }
}

function testForEach(items) {
    console.log('> Test FOR Each started !!')
    const start = new Date().getTime()
    let sum = 0
    items.forEach((_, index) => {
        sum += index
    })
    const useTime = new Date().getTime() - start

    return {
        'type': "for each",
        'time': useTime,
        'check': sum
    }
}

function testForIn(items) {

    console.log('> Test FOR In started !!')
    const start = new Date().getTime()
    let sum = 0
    let index = 0
    for (let i in items) {
        sum += index
        index += 1
    }
    const useTime = new Date().getTime() - start

    return {
        'type': "for in",
        'time': useTime,
        'check': sum
    }
}

function testForOf(items) {

    console.log('> Test FOR Of started !!')
    const start = new Date().getTime()
    let sum = 0
    let index = 0
    for (let i of items) {
        sum += index
        index += 1
    }
    const useTime = new Date().getTime() - start

    return {
        'type': "for of",
        'time': useTime,
        'check': sum
    }
}

function testMap(items) {
    console.log('> Test Map started !!')
    const start = new Date().getTime()
    let sum = 0
    items.map((obj, index) => {
        sum += index
        return obj
    })
    const useTime = new Date().getTime() - start

    return {
        'type': "map",
        'time': useTime,
        'check': sum
    }
}

// Run Test
console.log(`List size : ${list.length}`)
var sumItemLg = 0
for (let i = 0; i < list.length; i++) {
    let itemLg = list[i].length
    sumItemLg += itemLg
}
console.log(`Average items length (character): ${sumItemLg / list.length}`)
console.log('')

var result = []
var numTest = 20
for (let i = 0; i < numTest; i++) {
    // result.push({ "no":(i+1), ...testFor(list)})
    // result.push({ "no":(i+1), ...testForEach(list)})
    // result.push({ "no":(i+1), ...testForIn(list)})
    // result.push({ "no":(i+1), ...testForOf(list)})
    // result.push({ "no":(i+1), ...testMap(list)})
    const f1 = testFor(list)
    const f2 = testForEach(list)
    const f3 = testForIn(list)
    const f4 = testForOf(list)
    const m1 = testMap(list)

    result.push({ 
        "for": f1.time,
        "for each": f2.time,
        "for in": f3.time,
        "for of": f4.time,
        "map": m1.time,
    })
}
console.log('')
console.log('Result Table')
console.table(result)