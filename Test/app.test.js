
import { describe, test, expect } from 'vitest';
// Importar la función a testear
import { validarEmail } from '../src/Utils/validators.js';

// Test suite para la función validarEmail
describe('Validación de email', () => {
  test('debe validar email correctamente', () => {
    const email = 'test@example.com';
    const resultado = validarEmail(email);
    
    expect(resultado).toBe(null); // null = válido
  });

  test('debe rechazar email sin @', () => {
    const email = 'testexample.com';
    const resultado = validarEmail(email);
    
    expect(resultado).not.toBe(null);
    expect(resultado).toContain('inválido');
  });
});