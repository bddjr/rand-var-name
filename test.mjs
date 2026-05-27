import { randVarName } from './dist/main.js'

for (let i = 0; i < 3; i++) {
    console.log(randVarName())
}
for (let i = 0; i < 3; i++) {
    console.log(randVarName({ length: 16 }))
}

console.log()

for (let i = 0; i < 3; i++) {
    console.log(randVarName({ prefix: '_' }))
}
for (let i = 0; i < 3; i++) {
    console.log(randVarName({ prefix: '_', length: 17 }))
}
