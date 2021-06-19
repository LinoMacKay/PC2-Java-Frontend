import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { OutcomeRequestCreate } from 'src/app/model/OutcomeRequestCreate';
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
    private router: Router
  ) {}
  createForm: FormGroup;
  ngOnInit(): void {
    this.createForm = new FormGroup({
      monto: new FormControl('', [Validators.required]),
      detalle: new FormControl('', [Validators.required]),
    });
  }

  createOutcome() {
    if (this.createForm.valid) {
      var createBody = new OutcomeRequestCreate();
      createBody.amount = this.createForm.get('monto').value;
      createBody.detail = this.createForm.get('detalle').value;
      this.outcomeService.createOutcome(createBody).subscribe((response) => {
        this._matSnackbar.open('Se ha creado un gasto');
        this.redirectTo('gastos');
      });
    } else {
      this._matSnackbar.open('Rellene los datos correctamente');
    }
  }
  redirectTo(uri: string) {
    this.router.navigate([uri]);
  }
}
