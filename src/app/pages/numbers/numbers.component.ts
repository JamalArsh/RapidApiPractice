import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NumbersService } from 'src/app/services/numbers.service';
import { SnackService } from 'src/app/services/snack.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.scss'],
})
export class NumbersComponent implements OnInit {
  dateFact!: FormGroup;
  dateFactOutputText!: any;
  dateFactOutputYear!: any;
  constructor(
    private numbersService: NumbersService,
    private fb: FormBuilder,
    private snackBar: SnackService
  ) {}
  output: any;
  ngOnInit(): void {
    this.dateFact = this.fb.group({
      month: new FormControl(null, Validators.required),
      day: new FormControl(null, Validators.required),
    });

    // this.numbersService.getDateFact().subscribe((res) => {
    //   this.output = res;
    //   console.log(this.output);
    // });
  }

  dateFactSubmit(month: any, day: any) {
    console.log(`month = ${month}, Day = ${day}`);

    this.numbersService.getDateFact(month, day).subscribe((res: any) => {
      this.snackBar.snakBarSuccess();
      this.dateFactOutputText = res['text'];
      this.dateFactOutputYear = res['year'];

      console.log(this.dateFactOutputText);
    });
    // this.numbersService.getDateFact(month, day).subscribe({
    //   next: (res: any) => {
    //     this.snackBar.snakBarSuccess();
    //     this.dateFact = res['text'];
    //   },
    //   error: (res) => {
    //     this.snackBar.snakBarError();
    //   },
    // });
  }
}
