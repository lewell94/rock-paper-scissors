import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { homeRoutes } from "./home.routing";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { SharedModule } from "../shared/shared.module";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes),
        SharedModule,
        MatButtonModule,
    ],
    declarations: [
        HomePageComponent,
    ],
})
export class HomeModule {}