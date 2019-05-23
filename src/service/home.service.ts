import {Injectable} from '@angular/core';

@Injectable()
export class HomeService {

    selectSolutions: any = [
        {
            id: 1,
            svg: '../../assets/ui-kit/finger-button.svg',
            desc: 'Biometric Solution'
        },
        {
            id: 2,
            svg: './../assets/ui-kit/school-button.svg',
            desc: 'School Solution'
        },
        {
            id: 3,
            svg: '../../assets/ui-kit/transport-button.svg',
            desc: 'Transportation Solution'
        },
        {
            id: 4,
            svg: '../../assets/ui-kit/security-button.svg',
            desc: 'Security Solution'
        },
        {
            id: 5,
            svg: '../../assets/ui-kit/explore-button.svg',
            desc: 'Explore More',
            url: '/reaxiumPage'
        }
    ];

    public getSolution() {
        return this.selectSolutions;
    }

}
