import { Component, OnInit } from '@angular/core';
import { OutcomeService } from 'src/app/services/outcome.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.scss'],
})
export class GastosComponent implements OnInit {
  constructor(private outcomeService: OutcomeService) {}

  gastos = [];
  gastoTotal = 0;
  ngOnInit(): void {
    this.outcomeService.getAllOutcomes().subscribe((response) => {
      this.gastos = response;

      this.gastos.forEach((gasto) => {
        this.gastoTotal += gasto.amount;
      });
    });
  }
}
