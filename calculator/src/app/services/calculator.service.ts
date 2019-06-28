import { Injectable } from '@angular/core';

import { Operation } from './operation';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  /**
   * Sečte daná čísla a vrátí výsledek.
   * @param x první číslo
   * @param y druhé číslo
   * @returns výsledek sčítání
   */
  add(x: number, y: number): number { return x + y; }

  /**
   * Odečte druhé číslo od prvního a vrátí výsledek.
   * @param x první číslo
   * @param y druhé číslo
   * @returns výsledek odčítání
   */
  subtract(x: number, y: number): number { return x - y; }

  /**
   * Vynásobí daná čísla a vrátí výsledek.
   * @param x první číslo
   * @param y druhé číslo
   * @returns výsledek násobení
   */
  multiply(x: number, y: number): number { return x * y; }

  /**
   * Vydělí první číslo druhým bezezbytku a vrátí výsledek.
   * @param x první číslo
   * @param y druhé číslo
   * @returns výsledek dělení
   */
  divide(x: number, y: number): number { return x / y; }


  /**
   * Zavolá zadanou operaci a vrátí její výsledek.
   * @param operation zadaná operace
   * @param x první číslo pro operaci
   * @param y druhé číslo pro operaci
   * @returns výsledek operace
   */
  
  calculate(operation: Operation, x: number, y: number): number {
  switch (operation) {
    case Operation.ADD: return this.add(x, y);
    case Operation.SUBTRACT: return this.subtract(x, y);
    case Operation.MULTIPLY: return this.multiply(x, y);
    case Operation.DIVIDE: return this.divide(x, y);
  }
  return null; // Sem by se nikdy nemělo dojít.
}
}