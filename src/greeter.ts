export class Greeter {
  constructor(public readonly message: string) {}

  public greet(name: string): void {
    console.log(`${this.message}, ${name}!`)
  }
}
