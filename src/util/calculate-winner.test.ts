import { describe, expect, test } from 'bun:test';
import { calculateWinner } from './calculate-winner';

describe('calculateWinner', () => {
  test('should return the winner when there is a winning line (horizontal)', () => {
    const squares = ['X', 'X', 'X', null, null, null, null, null, null];
    expect(calculateWinner(squares)).toBe('X');
  });

  test('should return the winner when there is a winning line (vertical)', () => {
    const squares = ['O', null, null, 'O', null, null, 'O', null, null];
    expect(calculateWinner(squares)).toBe('O');
  });

  test('should return the winner when there is a winning line (diagonal)', () => {
    const squares = ['X', null, null, null, 'X', null, null, null, 'X'];
    expect(calculateWinner(squares)).toBe('X');
  });

  test('should return null when there is no winner', () => {
    const squares = ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'];
    expect(calculateWinner(squares)).toBe(null);
  });

  test('should return null for an empty board', () => {
    const squares = [null, null, null, null, null, null, null, null, null];
    expect(calculateWinner(squares)).toBe(null);
  });

  test('should handle partially filled boards without a winner', () => {
    const squares = ['X', 'O', 'X', null, 'O', null, null, null, null];
    expect(calculateWinner(squares)).toBe(null);
  });
});
