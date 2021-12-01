import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.interface';
import { CalcService } from '../shared/calc.service';

const DATA: Contact[] = [
{
  firstName: 'Lasse',
  lastName: 'Grønnebæk',
  phone: '+4589897818',
  email: 'lyg@jyskebank.dk'
},
{
  firstName: 'Hans',
  lastName: 'Pedersen',
  phone: '+4589897222',
  email: 'hp@jyskebank.dk'
},
{
  firstName: 'Polle',
  lastName: 'Svendsen',
  phone: '+4589897333',
  email: 'ps@jyskebank.dk'
}
];

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contactList?: Contact[];
  result?: number;

  constructor(private calcService: CalcService) { }

  ngOnInit(): void {
    this.contactList = DATA;

    this.result = this.calcService.add(4,5);
  }

}
