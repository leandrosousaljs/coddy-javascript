import { Speaker } from './Speaker.js';
import { Mover } from './Mover.js';

export class Robot {
  name: string;
  speaker: Speaker;
  mover: Mover;
  constructor(name: string) {
    this.name = name;

    // TODO: Initialize the speaker property with a new Speaker object
    this.speaker = new Speaker();
    // TODO: Initialize the mover property with a new Mover object
    this.mover = new Mover();
  }

  greet() {
    // TODO: Call the speak method on the speaker with the message "Hello!"
    this.speaker.speak('Hello!');
  }

  walkForward() {
    // TODO: Call the move method on mover with "forward" direction
    this.mover.move('forward');
  }
}
