import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzDividerModule } from 'ng-zorro-antd/divider';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    FormsModule,
    NzIconModule,
    CommonModule,
    NzListModule,
    NzInputModule,
    NzModalModule,
    NzButtonModule,
    NzDividerModule,
    NzLayoutModule,
    NzToolTipModule,
    NzDropDownModule,
    NzPopconfirmModule,
  ],
})
export class DashboardModule {}
