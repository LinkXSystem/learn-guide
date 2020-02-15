interface Employee {
  name: string;
  job: string;
}

class Developer implements Employee {
  name: string;
  job: string;

  constructor(name: string, job: string) {
    this.name = name;
    this.job = job;
  }
}

class Designer implements Employee {
  name: string;
  job: string;

  constructor(name: string, job: string) {
    this.name = name;
    this.job = job;
  }
}

class Company {
  employees: Array<Employee>;

  name: string;

  constructor(name: string) {
    this.name = name;
    this.employees = new Array();
  }

  join(employee: Employee) {
    this.employees.push(employee);
  }
}

(function() {
  const CompanyName = 'linksystem';
  const company = new Company(CompanyName);

  company.join(new Developer('zhi', 'FR'));
  company.join(new Designer('ni', 'UI'));
});
