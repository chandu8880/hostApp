import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { ApexAxisChartSeries, ApexChart, ApexTitleSubtitle, ApexXAxis, NgxApexchartsModule } from 'ngx-apexcharts';

@Component({
  selector: 'app-dashboard',
  imports: [RouterModule,NgxApexchartsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

  chartSeries: ApexAxisChartSeries = [
    {
      name: 'Sales',
      data: [30, 40, 45, 50, 49, 60, 70]
    }
  ];

  chartDetails: ApexChart = {
    type: 'bar',
    height: 300
  };

  chartXAxis: ApexXAxis = {
    categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  };

  chartTitle: ApexTitleSubtitle = {
    text: 'Weekly Sales',
    align: 'center'
  };

  constructor(private router: Router) {

  }

  routeNavigate(route: string) {
    this.router.navigate([route]);
  }

}
