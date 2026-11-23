const AnotherExample = require('@codefresh-io/js-utils/lib/another-example').default

describe('@codefresh-io/js-utils AnotherExample', () => {
  it('creates an instance and starts it', () => {
    const instance = new AnotherExample('test')

    expect(instance).toBeInstanceOf(AnotherExample)
    expect(typeof instance.start).toBe('function')
    expect(() => instance.start()).not.toThrow()
  })
})
