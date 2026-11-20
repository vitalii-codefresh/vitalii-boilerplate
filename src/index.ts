const AnotherExample = require('@codefresh-io/js-utils/lib/another-example').default
console.log("starting")
const instance = new AnotherExample("test")
console.log(JSON.stringify(instance))
console.log(instance.start())
