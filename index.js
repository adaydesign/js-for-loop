console.log(`Test Loop : For vs ForEach vs For in`)

// list
var list = []
var ch = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i']
var num = 50000000
console.log('Prepare List data')
const start = new Date().getTime()
for (let i = 0; i < num; i++) {
    // let msg = `#${i}${ch[i%ch.length]}${i}${Math.random()*num}%`
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
    //console.log(`>> FOR : ${useTime} | ${sum}`)
    console.log('finished <')

    return {
        'type': 'for',
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
    // console.log(`>> FOR Each : ${useTime} | ${sum}`)
    console.log('finished <')

    return {
        'type': 'forEach',
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
    // console.log(`>> FOR In : ${useTime} | ${sum}`)
    console.log('finished <')
    return {
        'type': 'for in',
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
    // console.log(`>> FOR Of : ${useTime} | ${sum}`)
    console.log('finished <')

    return {
        'type': 'for of',
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
    // console.log(`>> Map : ${useTime} | ${sum}`)
    console.log('finished <')

    return {
        'type': 'map',
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
result.push(testFor(list))
result.push(testForEach(list))
result.push(testForIn(list))
result.push(testForOf(list))
result.push(testMap(list))

console.log('')
console.log('Result Table')
console.table(result)