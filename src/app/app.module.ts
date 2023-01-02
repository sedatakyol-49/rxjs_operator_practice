import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CombineLatesAndWithLatesFromComponent } from './views/combine-lates-and-with-lates-from/combine-lates-and-with-lates-from.component';
import { DeabounceTimeAndDistinctUntilChangedComponent } from './views/deabounce-time-and-distinct-until-changed/deabounce-time-and-distinct-until-changed.component';
import { IntervalAndTimerComponent } from './views/interval-and-timer/interval-and-timer.component';
import { ShareReplayComponent } from './views/share-replay/share-replay.component';
import { ForkJoinZipComponent } from './views/fork-join-zip/fork-join-zip.component';
import { MergeMapTakeFilterComponent } from './views/merge-map-take-filter/merge-map-take-filter.component';
import { RetryWhenDelayScanComponent } from './views/retry-when-delay-scan/retry-when-delay-scan.component';

@NgModule({
  declarations: [
    AppComponent,
    CombineLatesAndWithLatesFromComponent,
    DeabounceTimeAndDistinctUntilChangedComponent,
    IntervalAndTimerComponent,
    ShareReplayComponent,
    ForkJoinZipComponent,
    MergeMapTakeFilterComponent,
    RetryWhenDelayScanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
