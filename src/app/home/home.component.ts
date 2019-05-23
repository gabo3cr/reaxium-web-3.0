import {Component} from '@angular/core';
import {HomeService} from '../../service/home.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    selectSolutions = null;
    showNav = true;

    logo: any = '../../assets/ui-kit/logo-reaxium.svg';
    subTitle: any = 'REAL-TIME NOTIFICATIONS';

    constructor(private homeService: HomeService) {
        this.selectSolutions = homeService.getSolution();
    }

}
