/* Challenge

You're given the component classes (Processor, Memory) and most of the Computer class. Your task is to complete the constructor in the computer.js file:

Create a processor property using the Processor class
Create a memory property using the Memory class
Pass processorSpeed to the Processor constructor and memorySize to the Memory constructor */

import { Processor } from './processor.ts';
import { Memory } from './memory.ts';

export class Computer {
  processor: Processor;
  memory: Memory;

  constructor(processorSpeed: number, memorySize: number) {
    // TODO: Create a processor property using the Processor class
    // and pass the processorSpeed to the Processor constructor
    this.processor = new Processor(processorSpeed);
    // TODO: Create a memory property using the Memory class
    // and pass the memorySize to the Memory constructor
    this.memory = new Memory(memorySize);
  }

  start() {
    console.log('Computer starting up...');
    this.processor.compute();
    this.memory.load();
  }
}
