import { Injectable } from '@angular/core';
import { Issue } from './issue'

@Injectable({
  providedIn: 'root'
})
export class IssuesService {

  private issues : Issue[] = [];
  constructor() { }
  getPandingIssues(): Issue[]{
    return this.issues.filter(issue=> !issue.completed);
  }
  createIssue(issue:Issue){
    issue.issueNo = this.issues.length + 1;
    this.issues.push(issue);
  }
}
