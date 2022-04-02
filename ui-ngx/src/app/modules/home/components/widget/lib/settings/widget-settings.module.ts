///
/// Copyright © 2016-2022 The Thingsboard Authors
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///     http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

import { NgModule, Type } from '@angular/core';
import { QrCodeWidgetSettingsComponent } from '@home/components/widget/lib/settings/qrcode-widget-settings.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/shared.module';
import { SharedHomeComponentsModule } from '@home/components/shared-home-components.module';
import { IWidgetSettingsComponent } from '@shared/models/widget.models';
import {
  TimeseriesTableWidgetSettingsComponent
} from '@home/components/widget/lib/settings/timeseries-table-widget-settings.component';
import {
  TimeseriesTableKeySettingsComponent
} from '@home/components/widget/lib/settings/timeseries-table-key-settings.component';
import {
  TimeseriesTableLatestKeySettingsComponent
} from '@home/components/widget/lib/settings/timeseries-table-latest-key-settings.component';
import {
  MarkdownWidgetSettingsComponent
} from '@home/components/widget/lib/settings/markdown-widget-settings.component';
import { LabelWidgetFontComponent } from '@home/components/widget/lib/settings/label-widget-font.component';
import { LabelWidgetLabelComponent } from '@home/components/widget/lib/settings/label-widget-label.component';
import { LabelWidgetSettingsComponent } from '@home/components/widget/lib/settings/label-widget-settings.component';
import {
  SimpleCardWidgetSettingsComponent
} from '@home/components/widget/lib/settings/simple-card-widget-settings.component';
import {
  DashboardStateWidgetSettingsComponent
} from '@home/components/widget/lib/settings/dashboard-state-widget-settings.component';
import {
  EntitiesHierarchyWidgetSettingsComponent
} from '@home/components/widget/lib/settings/entities-hierarchy-widget-settings.component';

@NgModule({
  declarations: [
    QrCodeWidgetSettingsComponent,
    TimeseriesTableWidgetSettingsComponent,
    TimeseriesTableKeySettingsComponent,
    TimeseriesTableLatestKeySettingsComponent,
    MarkdownWidgetSettingsComponent,
    LabelWidgetFontComponent,
    LabelWidgetLabelComponent,
    LabelWidgetSettingsComponent,
    SimpleCardWidgetSettingsComponent,
    DashboardStateWidgetSettingsComponent,
    EntitiesHierarchyWidgetSettingsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SharedHomeComponentsModule
  ],
  exports: [
    QrCodeWidgetSettingsComponent,
    TimeseriesTableWidgetSettingsComponent,
    TimeseriesTableKeySettingsComponent,
    TimeseriesTableLatestKeySettingsComponent,
    MarkdownWidgetSettingsComponent,
    LabelWidgetFontComponent,
    LabelWidgetLabelComponent,
    LabelWidgetSettingsComponent,
    SimpleCardWidgetSettingsComponent,
    DashboardStateWidgetSettingsComponent,
    EntitiesHierarchyWidgetSettingsComponent
  ]
})
export class WidgetSettingsModule {
}

export const widgetSettingsComponentsMap: {[key: string]: Type<IWidgetSettingsComponent>} = {
  'tb-qrcode-widget-settings': QrCodeWidgetSettingsComponent,
  'tb-timeseries-table-widget-settings': TimeseriesTableWidgetSettingsComponent,
  'tb-timeseries-table-key-settings': TimeseriesTableKeySettingsComponent,
  'tb-timeseries-table-latest-key-settings': TimeseriesTableLatestKeySettingsComponent,
  'tb-markdown-widget-settings': MarkdownWidgetSettingsComponent,
  'tb-label-widget-settings': LabelWidgetSettingsComponent,
  'tb-simple-card-widget-settings': SimpleCardWidgetSettingsComponent,
  'tb-dashboard-state-widget-settings': DashboardStateWidgetSettingsComponent,
  'tb-entities-hierarchy-widget-settings': EntitiesHierarchyWidgetSettingsComponent
};