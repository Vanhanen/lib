import { Greeter } from './greeter'

describe('Greeter', () => {
  it('should call console.log when greet-function is invoked', () => {
    const greeter = new Greeter('Hello')

    jest.spyOn(global.console, 'log').mockImplementation(message => {
      expect(message).toEqual('Hello, Mike!')
    })

    greeter.greet('Mike')
  })
})