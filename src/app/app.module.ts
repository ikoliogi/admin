import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product-update/product-update.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriesUpdateComponent } from './components/categories-update/categories-update.component';
import { CategoriesCreateComponent } from './components/categories-create/categories-create.component';
import { DepartmentsComponent } from './components/departments/departments.component';
import { DepartmentsCreateComponent } from './components/departments-create/departments-create.component';
import { DepartmentsUpdateComponent } from './components/departments-update/departments-update.component';
import { UsersComponent } from './components/users/users.component';
import { UsersCreateComponent } from './components/users-create/users-create.component';
import { UsersUpdateComponent } from './components/users-update/users-update.component';
import { PhotosComponent } from './components/photos/photos.component';
import { PhotosCreateComponent } from './components/photos-create/photos-create.component';
import { PhotosUpdateComponent } from './components/photos-update/photos-update.component';

const routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductsComponent
      },
      {
        path: 'create',
        component: ProductCreateComponent
      },
      {
        path: 'update/:productId',
        component: ProductUpdateComponent
      }
    ]
  },
  {
    path: 'categories',
    children: [
      {
        path: '',
        component: CategoriesComponent
      },
      {
        path: 'create',
        component: CategoriesCreateComponent
      },
      {
        path: 'update/:categoryId',
        component: CategoriesUpdateComponent
      }
    ]
  },
  {
    path: 'departments',
    children: [
      {
        path: '',
        component: DepartmentsComponent
      },
      {
        path: 'create',
        component: DepartmentsCreateComponent
      },
      {
        path: 'update/:departmentId',
        component: DepartmentsUpdateComponent
      }
    ]
  },
  {
    path: 'users',
    children: [
      {
        path: '',
        component: UsersComponent
      },
      {
        path: 'create',
        component: UsersCreateComponent
      },
      {
        path: 'update/:userId',
        component: UsersUpdateComponent
      }
    ]
  },
  {
    path: 'photos',
    children: [
      {
        path: '',
        component: PhotosComponent
      },
      {
        path: 'create',
        component: PhotosCreateComponent
      },
      {
        path: 'update/:photoId',
        component: PhotosUpdateComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ProductsComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    CategoriesComponent,
    CategoriesUpdateComponent,
    CategoriesCreateComponent,
    DepartmentsComponent,
    DepartmentsCreateComponent,
    DepartmentsUpdateComponent,
    UsersComponent,
    UsersCreateComponent,
    UsersUpdateComponent,
    PhotosComponent,
    PhotosCreateComponent,
    PhotosUpdateComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
