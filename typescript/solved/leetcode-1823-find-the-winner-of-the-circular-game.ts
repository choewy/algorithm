/**
 * @link https://leetcode.com/problems/find-the-winner-of-the-circular-game/
 * @runtime 47 ms
 * @memory 45.03 MB
 */

import { TestModule, TestTarget } from "../utils";

class Player {
  constructor(public pos: number, public next: Player = null) {}
}

class Game {
  head: Player;
  tail: Player;

  constructor(public survivors: number, public interval: number) {
    this.initialize(survivors);
  }

  private initialize(count: number) {
    this.head = new Player(1);

    if (count < 2) {
      return;
    }

    this.tail = new Player(count, this.head);

    let pos = 1;
    let player = this.head;

    while (true) {
      pos += 1;

      if (pos === count) {
        break;
      }

      player.next = new Player(pos);
      player = player.next;
    }

    player.next = this.tail;
  }

  private nextTurn() {
    let before: Player = null;
    let current = this.head;
    let next = this.head.next;

    let loop = 0;

    while (true) {
      loop += 1;

      if (loop === this.interval) {
        break;
      }

      before = current;
      current = current.next;
      next = current.next;
    }

    if (before?.next) {
      before.next = next;
    }

    this.survivors -= 1;
    this.head = next;

    return next;
  }

  play() {
    while (true) {
      if (this.survivors === 1) {
        return this.head.pos;
      }

      this.nextTurn();
    }
  }
}

const findTheWinner = (n: number, k: number): number => {
  return new Game(n, k).play();
};

export const test = () => {
  new TestModule(findTheWinner).test([
    new TestTarget("case 1", [5, 2], 3),
    new TestTarget("case 2", [6, 5], 1),
    new TestTarget("case 3", [3, 1], 3),
    new TestTarget("case 4", [1, 1], 1),
  ]);
};
