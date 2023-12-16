import largestSwap from "./function";


// Первый тест
test('23 >= 32 = false', () => {
    expect(largestSwap(23)).toBe(false);
});

// Втоорой тест
test('54 >= 45 = true', () => {
    expect(largestSwap(54)).toBe(true);
});

// Третий тест
test('77 > 77 = true', () => {
    expect(largestSwap(77)).toBe(true);
});