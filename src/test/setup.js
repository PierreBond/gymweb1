import '@testing-library/jest-dom';

class MockIntersectionObserver {
  constructor(callback) {
    this._callback = callback;
    this._elements = new Map();
  }

  observe(target) {
    this._elements.set(target, true);
    this._callback(
      [{ target, isIntersecting: true, intersectionRatio: 1 }],
      this
    );
  }

  unobserve(target) {
    this._elements.delete(target);
  }

  disconnect() {
    this._elements.clear();
  }
}

global.IntersectionObserver = MockIntersectionObserver;
