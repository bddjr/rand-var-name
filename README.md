Random JS variable name

```
npm i rand-var-name@latest
```

```js
import { randVarName } from 'rand-var-name'

console.log(randVarName()) // "Xf4$9f_o"
console.log(randVarName({ length: 16 })) // "m_Gy$NhhCtoObLsE"

console.log(randVarName({ prefix: '_' })) // "_Unrk9NW5"
console.log(randVarName({ prefix: '_', length: 17 })) // "_a6$nDajLBRLWsZU0"
```
