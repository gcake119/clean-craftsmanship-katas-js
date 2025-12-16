// int-queue.test.js
import { describe, expect, it } from 'vitest';
import {
  createIntQueue,
  isEmpty,
  isFull,
  enqueue,
  dequeue,
  peek,
} from './int-queue.js';

describe(`IntQueue`, ()=>{
    it(`create an empty queue`, ()=>{
        const queue = createIntQueue(3);

        expect(queue.size).toBe(0);
        expect(isEmpty(queue)).toBe(true);
        expect(isFull(queue)).toBe(false) 
    })
})

it(`enqueues and dequeues one value`,()=>{
    const queue = createIntQueue(3);

    enqueue(queue, 42);

    expect(queue.size).toBe(1)
    expect(isEmpty(queue)).toBe(false)
    expect(peek(queue)).toBe(42)

    const value = dequeue(queue);

    expect(value).toBe(42)
    expect(queue.size).toBe(0)
    expect(isEmpty(queue)).toBe(true)
})

it('becomes full after enqueuing capacity times',()=>{
    const queue = createIntQueue(3);

    expect(isFull(queue)).toBe(false);

    enqueue(queue, 1);
    enqueue(queue, 2);
    enqueue(queue, 3);
    
    expect(isFull(queue)).toBe(true);
    expect(queue.size).toBe(3);
})

it('throws error when enqueue to a full queue',()=>{
    const queue = createIntQueue(3);

    enqueue(queue, 1);
    enqueue(queue, 2);
    enqueue(queue, 3);

    expect(() => enqueue(queue, 4)).toThrowError('queue is full');
});

it('throws error when dequeue from an empty queue',()=>{
    const queue = createIntQueue(3);

    expect(() => dequeue(queue)).toThrowError('queue is empty');
});

it('在多次不規則的新增與取出後，索引繞圈時仍維持先進先出的正確順序', () => {
  const queue = createIntQueue(3)

  // 初次填入兩個
  enqueue(queue, 1)
  enqueue(queue, 2)

  expect(dequeue(queue)).toBe(1) // head: 0 -> 1，取出 1
  expect(peek(queue)).toBe(2)    // 目前隊首是 2

  // 填滿剩下的空間，讓 tail 繞回 index 0
  enqueue(queue, 3) // buffer: [ , 2, 3]，head = 1, tail = 0
  enqueue(queue, 4) // buffer: [4, 2, 3]，head = 1, tail = 1 (繞回到 0 再往前)

  // 依序取出，確認順序仍然正確
  expect(dequeue(queue)).toBe(2) // head: 1 -> 2，取出 2
  expect(dequeue(queue)).toBe(3) // head: 2 -> 0，取出 3（head 繞回 0）
  expect(dequeue(queue)).toBe(4) // head: 0 -> 1，取出 4

  expect(isEmpty(queue)).toBe(true)
})
