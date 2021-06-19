import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { OutcomeService } from 'src/app/services/outcome.service';
import { DeleteComponent } from './delete/delete.component';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.scss'],
})
export class GastosComponent implements OnInit {
  constructor(
    private outcomeService: OutcomeService,
    private _matSnackbar: MatSnackBar,

    private router: Router,
    private dialog: MatDialog
  ) {}

  gastos = [];
  gastoTotal = 0;
  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.outcomeService.getAllOutcomes().subscribe((response) => {
      this.gastos = response;

      this.gastos.forEach((gasto) => {
        this.gastoTotal += gasto.amount;
      });
    });
  }

  deleteGasto(gasto) {
    this.dialog
      .open(DeleteComponent, {
        height: '200px',
        width: '300px',
      })
      .afterClosed()
      .subscribe((result) => {
        if (result == true) {
          this.outcomeService
            .deleteOutcome(gasto.outcomeId)
            .subscribe((response) => {
              this._matSnackbar.open('Se ha eliminado el gasto', 'Aceptar', {
                duration: 2000,
              });

              this.redirectTo('gastos');
              this.initialize();
            });
        } else {
        }
      });
  }

  redirectTo(uri: string) {
    this.router.navigate([uri, 0]);
  }
  editGasto(gasto) {
    this.router.navigate(['create', gasto.outcomeId]);
  }
}
