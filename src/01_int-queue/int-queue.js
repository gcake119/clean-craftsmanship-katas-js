// int-queue.js
export function createIntQueue(capacity){
    if(!Number.isInteger(capacity)||capacity<=0){
        throw new Error('capacity must be a positive integer')
    }

    return {buffer:new Array(capacity),
        capacity,
        headIndex:0,
        tailIndex:0,
        size:0
    }
}

export function isEmpty(queue){
    return queue.size === 0;
}

export function isFull(queue){
    return queue.size === queue.capacity;
}

export function enqueue(queue, value){
    if(!Number.isInteger(value)){
        throw new Error('value must be an integer');
    }

    if (isFull(queue)){
        throw new Error('queue is full');
    }

    queue.buffer[queue.tailIndex]=value;
    queue.tailIndex = (queue.tailIndex + 1) % queue.capacity;
    queue.size += 1;
}

export function peek(queue){
    if (isEmpty(queue)){
        throw new Error('queue is empty');
    }
    return queue.buffer[queue.headIndex];
}

export function dequeue(queue){
    if(isEmpty(queue)){
        throw new Error('queue is empty');
    }

    const value = queue.buffer[queue.headIndex];
    queue.buffer[queue.headIndex]=undefined;
    queue.headIndex=(queue.headIndex + 1) % queue.capacity;
    queue.size -= 1;

    return value;

}