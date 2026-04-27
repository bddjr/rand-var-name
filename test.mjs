import randVarName from './dist/main.js'

for (let i = 0; i < 3; i++) {
    console.log(randVarName.rand())
}
for (let i = 0; i < 3; i++) {
    console.log(randVarName.rand(17))
}

console.log()

for (let i = 0; i < 3; i++) {
    console.log(randVarName.randWithoutPrefix())
}
for (let i = 0; i < 3; i++) {
    console.log(randVarName.randWithoutPrefix(16))
}
