import { c2f, f2c } from './temprature.js';

document.getElementById('app').innerHTML = `
<pre>
100 degrees C = ${c2f(100)} degrees F
212 degrees F = ${f2c(212)} degrees C
</pre>
`;
