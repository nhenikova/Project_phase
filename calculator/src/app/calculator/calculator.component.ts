import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { CalculatorService } from '../services/calculator.service';
import { Operation } from '../services/operation';

/**
 * Komponenta kalkulačky.
 * @export
 */
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  /**
   * Konstruktor s injektovanou službou pro sestavování formulářů a pro práci s operacemi kalkulačky.
   * @param formBuilder automaticky injektovaná služba pro sestavování formulářů
   * @param calculatorService automaticky injektovaná služba pro práci s operacemi kalkulačky
   */
  constructor(private formBuilder: FormBuilder, private calculatorService: CalculatorService) { }

  /** Getter pro existující operace kalkulačky. */
  get operations() { return Operation; }

  /** Výsledek operace nebo null. */
  result: number | null = null;

  /** Formulář kalkulačky s jeho sestavením. */
  calculatorForm = this.formBuilder.group({
    x: [0, Validators.required],
    y: [0, Validators.required],
    operation: ['', Validators.required]
  });

  /** Funkce vykonaná při úspěšném odeslání formuláře kalkulačky, která zpracuje odeslané hodnoty. */
  onSubmit(): void {
    const values = this.calculatorForm.value; // Získání odeslaných hodnot z formuláře.
    const operation: keyof typeof Operation = values.operation; // Převod operace na hodnotu číselníku.
    // Necháme si vypočítat výsledek podle zvolené operace a zadaných hodnot.
    this.result = this.calculatorService.calculate(Operation[operation], values.x, values.y);

}
}

