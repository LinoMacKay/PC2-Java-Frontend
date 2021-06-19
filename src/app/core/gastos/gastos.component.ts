import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OutcomeService } from 'src/app/services/outcome.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.scss'],
})
export class GastosComponent implements OnInit {
  constructor(private outcomeService: OutcomeService, private router: Router) {}

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
  deleteGasto(gasto) {}

  redirectTo(uri: string) {
    this.router.navigate([uri]);
  }
}
