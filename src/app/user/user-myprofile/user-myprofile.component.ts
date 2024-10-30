import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { Router } from '@angular/router';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-user-myprofile',
  templateUrl: './user-myprofile.component.html',
  styleUrls: ['./user-myprofile.component.css'],
})
export class UserMyprofileComponent implements OnInit {
  @Input() userData!: any;

  constructor(private router: Router, private clipboard: Clipboard) {}
  ngOnInit(): void {}

  navigateTOUserNetwork(level: number) {
    this.router.navigate(['/userNetwork', level]);
  }

  shareLink(referenceId: string) {
    const shareableLink = `https://goldenfuturelife.com/userSignUp?refId=${referenceId}`;
    this.clipboard.copy(shareableLink);
    alert('Link copied to clipboard!');
  }
}
