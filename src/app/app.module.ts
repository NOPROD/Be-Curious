import { CustomSuccessComponent } from './shared/notification/custom-success/custom-success.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { LottieAnimationViewModule } from 'ng-lottie';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomRevealComponent } from './modals/custom-reveal/custom-reveal.component';
import { IntroChoiceBtnComponent } from './modals/intro-choice-btn/intro-choice-btn.component';
import { LoginComponent } from './modals/login/login.component';
import { GlobalConfig } from './shared/interface/theme/global-config.interface';

// All pages
import {
  HomeComponent,
  PageNotFoundComponent,
  AboutComponent,
  SettingsComponent,
  QuizzComponent,
  SuccessComponent,
  LearnComponent
} from './pages';

/** All modal components */
import {
  CloseBtnComponent,
  HeaderModalComponent,
  HeaderWelcomeComponent
} from './shared/modals';

/** All components */
import {
  ContactComponent,
  FooterComponent,
  ThemeComponent,
  TutorialComponent,
  BtnNavigationComponent,
  HeaderComponent,
  InputComponent,
  ChoiceComponent,
  MenuComponent,
  EditorComponent,
  OptionsComponent,
  SecondHeaderComponent,
  ColorFilterComponent,
  ResultBoxComponent,
  WelcomeComponent
} from './component';

/** All providers */
import {
  AnimeJsProvider,
  UtilsProvider,
  SuccessProvider,
  ElasticProvider,
  LottieProvider,
  AlertProvider,
  StrategyProvider,
  IntroProvider,
  TutorialProvider,
  UserProvider,
  UserFollowProvider,
  MessageProvider,
  StorageProvider,
  ModalProvider
} from './shared/provider';

/** Import individual module from NG-Zorro theme */
import {
  fr_FR,
  NgZorroAntdModule,
  NZ_I18N,
  NzButtonModule,
  NZ_ICON_DEFAULT_TWOTONE_COLOR,
  NZ_ICONS,
  NzDropDownModule,
  NzGridModule,
  NzNotificationModule,
  NzEmptyModule,
  NzModalModule,
  NzSwitchModule,
  NzTagModule,
  NzMessageModule,
  NZ_MESSAGE_CONFIG,
  NzDrawerModule,
  NzCarouselModule
} from 'ng-zorro-antd';

/** All modals */
import {
  OnboardingComponent,
  UserSettingsComponent,
  IntroBasicSettingsComponent,
  IntroExplainComponent,
  IntroTechnoComponent,
  IntroWelcomeComponent,
  IntroComponent
} from './modals';

/** Global config for Ant Design library, can overwrite  */
const nzConfig: GlobalConfig = {
  lang: fr_FR,
  icons: { iconsColor: '#061787', importIcons: AllIcons },
  messageConfig: { duration: 3000, maxStack: 3 }
};

/** Can't build in prod without this tricks */
export function titleWebsite(): string {
  return 'Be Curious';
}

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    InputComponent,
    ContactComponent,
    FooterComponent,
    WelcomeComponent,
    ChoiceComponent,
    HomeComponent,
    ResultBoxComponent,
    InputComponent,
    OptionsComponent,
    MenuComponent,
    HeaderComponent,
    IntroComponent,
    UserSettingsComponent,
    OnboardingComponent,
    IntroWelcomeComponent,
    IntroTechnoComponent,
    IntroBasicSettingsComponent,
    CustomSuccessComponent,
    IntroExplainComponent,
    CloseBtnComponent,
    HeaderModalComponent,
    HeaderWelcomeComponent,
    HeaderWelcomeComponent,
    IntroChoiceBtnComponent,
    LoginComponent,
    CustomRevealComponent,
    UserSettingsComponent,
    SuccessComponent,
    SettingsComponent,
    AboutComponent,
    QuizzComponent,
    SecondHeaderComponent,
    LearnComponent,
    ThemeComponent,
    TutorialComponent,
    BtnNavigationComponent,
    EditorComponent,
    ColorFilterComponent
  ],
  imports: [
    NgZorroAntdModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    LottieAnimationViewModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NzGridModule,
    NzDropDownModule,
    NzNotificationModule,
    NgxAuthFirebaseUIModule.forRoot(
      {
        apiKey: 'AIzaSyBjVsT1H52O4vvv-hXiJ3EypYqOpPSm_dU',
        authDomain: 'be-curious.firebaseapp.com',
        databaseURL: 'https://be-curious.firebaseio.com',
        projectId: 'be-curious',
        storageBucket: 'be-curious.appspot.com',
        messagingSenderId: '1084722472386',
        appId: '1:1084722472386:web:2b08d862cd5ea5c0'
      },
      titleWebsite,
      {
        enableFirestoreSync: true,
        toastMessageOnAuthSuccess: false,
        toastMessageOnAuthError: false
      }
    ),
    NzEmptyModule,
    NzMessageModule,
    AngularSvgIconModule.forRoot(),
    CodemirrorModule,
    NzSwitchModule,
    NzCarouselModule,
    NzModalModule,
    NzButtonModule,
    NzDrawerModule,
    NzTagModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ElasticProvider,
    AlertProvider,
    LottieProvider,
    AnimeJsProvider,
    StorageProvider,
    UserProvider,
    UserFollowProvider,
    SuccessProvider,
    TutorialProvider,
    StrategyProvider,
    MessageProvider,
    IntroProvider,
    ModalProvider,
    UtilsProvider,
    /** Limit max alert at the same time */
    {
      provide: NZ_MESSAGE_CONFIG,
      useValue: { nzMaxStack: nzConfig.messageConfig.maxStack }
    },
    /** Set theme to fr */
    { provide: NZ_I18N, useValue: nzConfig.lang },
    /** Set theme icon color */
    {
      provide: NZ_ICON_DEFAULT_TWOTONE_COLOR,
      useValue: nzConfig.icons.iconsColor
    },
    /** Import all icon, be crazy ! */
    { provide: NZ_ICONS, useValue: nzConfig.icons.importIcons }
  ],
  /** Need to use declarations and entryComponents for custom modals */
  entryComponents: [
    OnboardingComponent,
    IntroWelcomeComponent,
    UserSettingsComponent,
    IntroTechnoComponent,
    IntroBasicSettingsComponent,
    IntroExplainComponent,
    IntroComponent,
    CloseBtnComponent,
    QuizzComponent,
    HeaderModalComponent,
    IntroChoiceBtnComponent,
    HeaderWelcomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
