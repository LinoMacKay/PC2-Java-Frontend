import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { OutcomeRequestCreate } from 'src/app/model/OutcomeRequestCreate';
import { OutcomeRequestUpdate } from 'src/app/model/OutcomeRequestUpdate';
import { OutcomeService } from 'src/app/services/outcome.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  constructor(
    private _matSnackbar: MatSnackBar,
    private outcomeService: OutcomeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  createForm: FormGroup;
  id: number;
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.createForm = new FormGroup({
      monto: new FormControl('', [Validators.required]),
      detalle: new FormControl('', [Validators.required]),
    });

    if (this.id != 0) {
      this.outcomeService.getOutcomeById(this.id).subscribe((response) => {
        this.createForm.get('monto').setValue(response.amount);
        this.createForm.get('detalle').setValue(response.detail);
      });
    }
  }

  createOutcome() {
    if (this.createForm.valid) {
      var createBody = new OutcomeRequestCreate();
      createBody.amount = this.createForm.get('monto').value;
      createBody.detail = this.createForm.get('detalle').value;

      if (this.id != 0) {
        var updateBody = new OutcomeRequestUpdate();
        updateBody.amount = this.createForm.get('monto').value;
        updateBody.detail = this.createForm.get('detalle').value;
        updateBody.outcomeId = this.id.toString();
      }

      if (this.id != 0) {
        this.outcomeService.updateOutcome(updateBody).subscribe((response) => {
          this._matSnackbar.open('Se ha actualizado el gasto', 'Aceptar', {
            duration: 2000,
          });
          this.redirectTo('gastos');
        });
      } else {
        this.outcomeService.createOutcome(createBody).subscribe((response) => {
          this._matSnackbar.open('Se ha creado un gasto', 'Aceptar', {
            duration: 2000,
          });
          this.redirectTo('gastos');
        });
      }
    } else {
      this._matSnackbar.open('Rellene los datos correctamente');
    }
  }
  redirectTo(uri: string) {
    this.router.navigate([uri]);
  }
}
