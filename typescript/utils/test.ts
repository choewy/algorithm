export class TestTarget<Args extends Array<any>, Expect> {
  constructor(readonly name: string, readonly args: Args, readonly expect: Expect) {}
}

export class TestModule<Args extends Array<any>, Expect> {
  constructor(readonly func: (...args: Args) => Expect) {}

  private checkArray(expect: Array<any>, output: Array<any>) {
    return JSON.stringify(expect.sort()) === JSON.stringify(output.sort());
  }

  public test(targets: TestTarget<Args, Expect>[]) {
    for (const target of targets) {
      console.log(`${target.name} running`);

      const name = target.name;
      const args = target.args;
      const expect = target.expect;
      const output = this.func(...target.args);

      let result: boolean;

      if (Array.isArray(expect) && Array.isArray(output)) {
        result = this.checkArray(expect, output);
      } else {
        result = expect === output;
      }

      const message = JSON.stringify({ name, args, expect, output, result }, null, 2);

      console.log(message);
    }
  }
}
