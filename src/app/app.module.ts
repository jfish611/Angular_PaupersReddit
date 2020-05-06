import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PostViewerComponent } from './post-viewer/post-viewer.component';
import { SinglePostViewerComponent } from './single-post-viewer/single-post-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    PostViewerComponent,
    SinglePostViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
