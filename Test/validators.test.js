import { describe, test, expect } from 'vitest';
import { validarEmail, validarEdad } from '../src/utils/validators.js';

// Test suite para la función validarEmail
describe('validarEmail', () => {
  test('acepta email válido', () => {
    expect(validarEmail('test@example.com')).toBe(null);
  });

  test('rechaza email sin @', () => {
    expect(validarEmail('testexample.com')).toContain('inválido');
  });

  test('rechaza email sin dominio', () => {
    expect(validarEmail('test@')).toContain('inválido');
  });

  test('rechaza email vacío', () => {
    expect(validarEmail('')).toContain('requerido');
  });

  test('rechaza email null', () => {
    expect(validarEmail(null)).toContain('requerido');
  });
});

