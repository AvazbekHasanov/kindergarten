<template>




  <body>
  <div class="container-xxl bg-white p-0">
    <!-- Spinner Start -->
    <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
      <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
    <!-- Spinner End -->


    <!-- Navbar Start -->
    <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
      <a href="/" class="navbar-brand">
        <h1 class="m-0 text-primary"><i class="fa fa-book-reader me-3"></i>Kider</h1>
      </a>
      <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
      </button>
      <el-menu mode="horizontal" class="nav-menu">
        <el-menu-item index="1"><i class="el-icon-house"></i> Bosh sahifa</el-menu-item>
        <el-menu-item index="2"><i class="el-icon-notebook-1"></i> Dasturlar</el-menu-item>
        <el-menu-item index="3"><i class="el-icon-info"></i> Biz haqimizda</el-menu-item>
        <el-menu-item index="4"><i class="el-icon-star-off"></i> Fikrlar</el-menu-item>
        <el-menu-item index="5"><i class="el-icon-message"></i> Bog‘lanish</el-menu-item>
        <el-menu-item> <router-link to="/sign">Ro‘yxatdan o‘tish</router-link> </el-menu-item>
      </el-menu>
    </nav>

    <!-- Navbar End -->


    <!-- Carousel Start -->
    <div class="container-fluid p-0 mb-5">
      <div class="owl-carousel header-carousel position-relative">
        <div class="owl-carousel-item position-relative">
          <img class="img-fluid" src="@/assets/img/carousel-1.jpg" alt="">
          <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style="background: rgba(0, 0, 0, .2);">
            <div class="container">
              <div class="row justify-content-start">
                <div class="col-10 col-lg-8">
                  <h1 class="display-2 text-white animated slideInDown mb-4">Farzandingiz uchun eng yaxshi bolalar bog'chasi</h1>
                  <p class="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                  <a href="" class="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">Batafsil</a>
                  <a href="" class="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">Darslarimiz</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="owl-carousel-item position-relative">
          <img class="img-fluid" src="@/assets/img/carousel-2.jpg" alt="">
          <div class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style="background: rgba(0, 0, 0, .2);">
            <div class="container">
              <div class="row justify-content-start">
                <div class="col-10 col-lg-8">
                  <h1 class="display-2 text-white animated slideInDown mb-4">Farzandingiz uchun yorqin kelajak yarating</h1>
                  <p class="fs-5 fw-medium text-white mb-4 pb-2">Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.</p>
                  <a href="" class="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft">Batafsil</a>
                  <a href="" class="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight">Darslarimiz</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Carousel End -->


    <!-- Facilities Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
          <h1 class="mb-3">Maktab Imkoniyatlari</h1>
          <p>Farzandingiz uchun eng yaxshi muhitni yaratamiz — xavfsiz transport, sog‘lom ovqatlanish, faol o‘yinlar va ilg‘or ta'lim uslublari bilan ta’minlaymiz.</p>
        </div>
        <div class="row g-4">
          <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="facility-item">
              <div class="facility-icon bg-primary">
                <span class="bg-primary"></span>
                <i class="fa fa-bus-alt fa-3x text-primary"></i>
                <span class="bg-primary"></span>
              </div>
              <div class="facility-text bg-primary">
                <h3 class="text-primary mb-3">Maktab Avtobusi</h3>
                <p class="mb-0">Bolalar uchun qulay va xavfsiz transport xizmati har kuni uyidan maktabgacha va ortga olib boriladi.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="facility-item">
              <div class="facility-icon bg-success">
                <span class="bg-success"></span>
                <i class="fa fa-futbol fa-3x text-success"></i>
                <span class="bg-success"></span>
              </div>
              <div class="facility-text bg-success">
                <h3 class="text-success mb-3">O‘yingoh</h3>
                <p class="mb-0">Keng va xavfsiz o‘yingohlar bolalarning jismoniy faolligini rivojlantirishga yordam beradi.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="facility-item">
              <div class="facility-icon bg-warning">
                <span class="bg-warning"></span>
                <i class="fa fa-home fa-3x text-warning"></i>
                <span class="bg-warning"></span>
              </div>
              <div class="facility-text bg-warning">
                <h3 class="text-warning mb-3">Sog‘lom Ovqatlanish</h3>
                <p class="mb-0">Ovqatlanish menyusi bolalarning sog‘lig‘i va energiyasi uchun maxsus dietologlar tomonidan tuzilgan.</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
            <div class="facility-item">
              <div class="facility-icon bg-info">
                <span class="bg-info"></span>
                <i class="fa fa-chalkboard-teacher fa-3x text-info"></i>
                <span class="bg-info"></span>
              </div>
              <div class="facility-text bg-info">
                <h3 class="text-info mb-3">Ijobiy Ta'lim Muhiti</h3>
                <p class="mb-0">O‘qituvchilarimiz har bir bolaning shaxsiy qobiliyatini ochish va rivojlantirish uchun ijobiy muhit yaratadi.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Facilities End -->


    <!-- About Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="row g-5 align-items-center">
          <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
            <h1 class="mb-4">Bizning ishimiz va madaniy tadbirlarimiz haqida ko‘proq bilib oling</h1>
            <p>Bolalarning har tomonlama rivojlanishi uchun o‘quvdan tashqari faoliyatlarga ham alohida e’tibor qaratamiz. Bizda har hafta turli madaniy tadbirlar, teatr namoyishlari va ijodiy mashg‘ulotlar tashkil etiladi.</p>
            <p class="mb-4">Jamoamiz bolalarning ijtimoiy ko‘nikmalarini oshirish va o‘ziga ishonchini mustahkamlash uchun ijobiy muhit yaratishga intiladi. Har bir bola o‘z qobiliyatini namoyish eta oladigan muhitni ta'minlash bizning asosiy maqsadimizdir.</p>
            <div class="row g-4 align-items-center">
              <div class="col-sm-6">
                <a class="btn btn-primary rounded-pill py-3 px-5" href="">Batafsil o‘qish</a>
              </div>
              <div class="col-sm-6">
                <div class="d-flex align-items-center">
                  <img class="rounded-circle flex-shrink-0" src="@/assets/img/user.jpg" alt="" style="width: 45px; height: 45px;">
                  <div class="ms-3">
                    <h6 class="text-primary mb-1">Jahon Do‘st</h6>
                    <small>Bosh direktor va asoschi</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
            <div class="row">
              <div class="col-12 text-center">
                <img class="img-fluid w-75 rounded-circle bg-light p-3" src="@/assets/img/about-1.jpg" alt="">
              </div>
              <div class="col-6 text-start" style="margin-top: -150px;">
                <img class="img-fluid w-100 rounded-circle bg-light p-3" src="@/assets/img/about-2.jpg" alt="">
              </div>
              <div class="col-6 text-end" style="margin-top: -150px;">
                <img class="img-fluid w-100 rounded-circle bg-light p-3" src="@/assets/img/about-3.jpg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- About End -->


    <!-- Call To Action Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="bg-light rounded">
          <div class="row g-0">
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s" style="min-height: 400px;">
              <div class="position-relative h-100">
                <img class="position-absolute w-100 h-100 rounded" src="@/assets/img/call-to-action.jpg" style="object-fit: cover;">
              </div>
            </div>
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <div class="h-100 d-flex flex-column justify-content-center p-5">
                <h1 class="mb-4">O‘qituvchi bo‘lishni xohlaysizmi?</h1>
                <p class="mb-4">Agar siz bolalar bilan ishlashni yaxshi ko‘rsangiz, bilim va tajribangizni boshqalar bilan bo‘lishishni istasangiz, bizning jamoamizga qo‘shiling! Biz doimiy ravishda mehribon va fidoyi o‘qituvchilarni izlaymiz.</p>
                <a class="btn btn-primary py-3 px-5" href="">Hozir boshlang<i class="fa fa-arrow-right ms-2"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Call To Action End -->


    <!-- Classes Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
          <h1 class="mb-3">Maktab Darslari</h1>
          <p>Bizning maktabimizda har bir o'quvchi o'zining ijodiy qobiliyatlarini rivojlantirish uchun turli darslar va faoliyatlarga ega bo'ladi. Bizning maqsadimiz – har bir bola uchun ta'limni qiziqarli va foydali qilish, shuningdek, ularning shaxsiy va akademik rivojlanishiga yordam berish.</p>
        </div>

        <div class="row g-4">
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="classes-item">
              <div class="bg-light rounded-circle w-75 mx-auto p-3">
                <img class="img-fluid rounded-circle" src="@/assets/img/classes-1.jpg" alt="">
              </div>
              <div class="bg-light rounded p-4 pt-5 mt-n5">
                <a class="d-block text-center h3 mt-3 mb-4" href="">San'at va Chizma</a>
                <div class="d-flex align-items-center justify-content-between mb-4">
                  <div class="d-flex align-items-center">
                    <img class="rounded-circle flex-shrink-0" src="@/assets/img/user.jpg" alt="" style="width: 45px; height: 45px;">
                    <div class="ms-3">
                      <h6 class="text-primary mb-1">Jhon Doe</h6>
                      <small>O'qituvchi</small>
                    </div>
                  </div>
                  <span class="bg-primary text-white rounded-pill py-2 px-3" href="">$99</span>
                </div>
                <div class="row g-1">
                  <div class="col-4">
                    <div class="border-top border-3 border-primary pt-2">
                      <h6 class="text-primary mb-1">Yosh:</h6>
                      <small>3-5 Yosh</small>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="border-top border-3 border-success pt-2">
                      <h6 class="text-success mb-1">Vaqt:</h6>
                      <small>9-10 AM</small>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="border-top border-3 border-warning pt-2">
                      <h6 class="text-warning mb-1">Sig'im:</h6>
                      <small>30 Bola</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="classes-item">
              <div class="bg-light rounded-circle w-75 mx-auto p-3">
                <img class="img-fluid rounded-circle" src="@/assets/img/classes-2.jpg" alt="">
              </div>
              <div class="bg-light rounded p-4 pt-5 mt-n5">
                <a class="d-block text-center h3 mt-3 mb-4" href="">Rang Boshqaruvi</a>
                <div class="d-flex align-items-center justify-content-between mb-4">
                  <div class="d-flex align-items-center">
                    <img class="rounded-circle flex-shrink-0" src="@/assets/img/user.jpg" alt="" style="width: 45px; height: 45px;">
                    <div class="ms-3">
                      <h6 class="text-primary mb-1">Jhon Doe</h6>
                      <small>O'qituvchi</small>
                    </div>
                  </div>
                  <span class="bg-primary text-white rounded-pill py-2 px-3" href="">$99</span>
                </div>
                <div class="row g-1">
                  <div class="col-4">
                    <div class="border-top border-3 border-primary pt-2">
                      <h6 class="text-primary mb-1">Yosh:</h6>
                      <small>3-5 Yosh</small>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="border-top border-3 border-success pt-2">
                      <h6 class="text-success mb-1">Vaqt:</h6>
                      <small>9-10 AM</small>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="border-top border-3 border-warning pt-2">
                      <h6 class="text-warning mb-1">Sig'im:</h6>
                      <small>30 Bola</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="classes-item">
              <div class="bg-light rounded-circle w-75 mx-auto p-3">
                <img class="img-fluid rounded-circle" src="@/assets/img/classes-3.jpg" alt="">
              </div>
              <div class="bg-light rounded p-4 pt-5 mt-n5">
                <a class="d-block text-center h3 mt-3 mb-4" href="">Sport va Raqs</a>
                <div class="d-flex align-items-center justify-content-between mb-4">
                  <div class="d-flex align-items-center">
                    <img class="rounded-circle flex-shrink-0" src="@/assets/img/user.jpg" alt="" style="width: 45px; height: 45px;">
                    <div class="ms-3">
                      <h6 class="text-primary mb-1">Jhon Doe</h6>
                      <small>O'qituvchi</small>
                    </div>
                  </div>
                  <span class="bg-primary text-white rounded-pill py-2 px-3" href="">$99</span>
                </div>
                <div class="row g-1">
                  <div class="col-4">
                    <div class="border-top border-3 border-primary pt-2">
                      <h6 class="text-primary mb-1">Yosh:</h6>
                      <small>3-5 Yosh</small>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="border-top border-3 border-success pt-2">
                      <h6 class="text-success mb-1">Vaqt:</h6>
                      <small>9-10 AM</small>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="border-top border-3 border-warning pt-2">
                      <h6 class="text-warning mb-1">Sig'im:</h6>
                      <small>30 Bola</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="classes-item">
              <div class="bg-light rounded-circle w-75 mx-auto p-3">
                <img class="img-fluid rounded-circle" src="@/assets/img/classes-4.jpg" alt="">
              </div>
              <div class="bg-light rounded p-4 pt-5 mt-n5">
                <a class="d-block text-center h3 mt-3 mb-4" href="">Til va Nutq</a>
                <div class="d-flex align-items-center justify-content-between mb-4">
                  <div class="d-flex align-items-center">
                    <img class="rounded-circle flex-shrink-0" src="@/assets/img/user.jpg" alt="" style="width: 45px; height: 45px;">
                    <div class="ms-3">
                      <h6 class="text-primary mb-1">Jhon Doe</h6>
                      <small>O'qituvchi</small>
                    </div>
                  </div>
                  <span class="bg-primary text-white rounded-pill py-2 px-3" href="">$99</span>
                </div>
                <div class="row g-1">
                  <div class="col-4">
                    <div class="border-top border-3 border-primary pt-2">
                      <h6 class="text-primary mb-1">Yosh:</h6>
                      <small>3-5 Yosh</small>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="border-top border-3 border-success pt-2">
                      <h6 class="text-success mb-1">Vaqt:</h6>
                      <small>9-10 AM</small>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="border-top border-3 border-warning pt-2">
                      <h6 class="text-warning mb-1">Sig'im:</h6>
                      <small>30 Bola</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="classes-item">
              <div class="bg-light rounded-circle w-75 mx-auto p-3">
                <img class="img-fluid rounded-circle" src="@/assets/img/classes-5.jpg" alt="">
              </div>
              <div class="bg-light rounded p-4 pt-5 mt-n5">
                <a class="d-block text-center h3 mt-3 mb-4" href="">Din va Tarix</a>
                <div class="d-flex align-items-center justify-content-between mb-4">
                  <div class="d-flex align-items-center">
                    <img class="rounded-circle flex-shrink-0" src="@/assets/img/user.jpg" alt="" style="width: 45px; height: 45px;">
                    <div class="ms-3">
                      <h6 class="text-primary mb-1">Jhon Doe</h6>
                      <small>O'qituvchi</small>
                    </div>
                  </div>
                  <span class="bg-primary text-white rounded-pill py-2 px-3" href="">$99</span>
                </div>
                <div class="row g-1">
                  <div class="col-4">
                    <div class="border-top border-3 border-primary pt-2">
                      <h6 class="text-primary mb-1">Yosh:</h6>
                      <small>3-5 Yosh</small>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="border-top border-3 border-success pt-2">
                      <h6 class="text-success mb-1">Vaqt:</h6>
                      <small>9-10 AM</small>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="border-top border-3 border-warning pt-2">
                      <h6 class="text-warning mb-1">Sig'im:</h6>
                      <small>30 Bola</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="classes-item">
              <div class="bg-light rounded-circle w-75 mx-auto p-3">
                <img class="img-fluid rounded-circle" src="@/assets/img/classes-6.jpg" alt="">
              </div>
              <div class="bg-light rounded p-4 pt-5 mt-n5">
                <a class="d-block text-center h3 mt-3 mb-4" href="">Umumiy Bilim</a>
                <div class="d-flex align-items-center justify-content-between mb-4">
                  <div class="d-flex align-items-center">
                    <img class="rounded-circle flex-shrink-0" src="@/assets/img/user.jpg" alt="" style="width: 45px; height: 45px;">
                    <div class="ms-3">
                      <h6 class="text-primary mb-1">Jhon Doe</h6>
                      <small>O'qituvchi</small>
                    </div>
                  </div>
                  <span class="bg-primary text-white rounded-pill py-2 px-3" href="">$99</span>
                </div>
                <div class="row g-1">
                  <div class="col-4">
                    <div class="border-top border-3 border-primary pt-2">
                      <h6 class="text-primary mb-1">Yosh:</h6>
                      <small>3-5 Yosh</small>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="border-top border-3 border-success pt-2">
                      <h6 class="text-success mb-1">Vaqt:</h6>
                      <small>9-10 AM</small>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="border-top border-3 border-warning pt-2">
                      <h6 class="text-warning mb-1">Sig'im:</h6>
                      <small>30 Bola</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Classes End -->


    <!-- Appointment Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="bg-light rounded">
          <div class="row g-0">
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div class="h-100 d-flex flex-column justify-content-center p-5">
                <h1 class="mb-4">Uchrashuv Belgilash</h1>
                <form>
                  <div class="row g-3">
                    <div class="col-sm-6">
                      <div class="form-floating">
                        <input type="text" class="form-control border-0" id="gname" placeholder="Vazir Ismi">
                        <label for="gname">Vazir Ismi</label>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-floating">
                        <input type="email" class="form-control border-0" id="gmail" placeholder="Vazir Emaili">
                        <label for="gmail">Vazir Emaili</label>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-floating">
                        <input type="text" class="form-control border-0" id="cname" placeholder="Bola Ismi">
                        <label for="cname">Bola Ismi</label>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-floating">
                        <input type="text" class="form-control border-0" id="cage" placeholder="Bola Yoshi">
                        <label for="cage">Bola Yoshi</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <div class="form-floating">
                        <textarea class="form-control border-0" placeholder="Bu yerda xabar qoldiring" id="message" style="height: 100px"></textarea>
                        <label for="message">Xabar</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-primary w-100 py-3" type="submit">Yuborish</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s" style="min-height: 400px;">
              <div class="position-relative h-100">
                <img class="position-absolute w-100 h-100 rounded" src="@/assets/img/appointment.jpg" style="object-fit: cover;">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Appointment End -->


    <!-- Team Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
          <h1 class="mb-3">Mashhur O'qituvchilar</h1>
          <p>Tempora ut dolore lorem kasd vero ipsum sit, eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>
        <div class="row g-4">
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div class="team-item position-relative">
              <img class="img-fluid rounded-circle w-75" src="@/assets/img/team-1.jpg" alt="">
              <div class="team-text">
                <h3>To'liq Ism</h3>
                <p>Lavozimi</p>
                <div class="d-flex align-items-center">
                  <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                  <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-twitter"></i></a>
                  <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div class="team-item position-relative">
              <img class="img-fluid rounded-circle w-75" src="@/assets/img/team-2.jpg" alt="">
              <div class="team-text">
                <h3>To'liq Ism</h3>
                <p>Lavozimi</p>
                <div class="d-flex align-items-center">
                  <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                  <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-twitter"></i></a>
                  <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div class="team-item position-relative">
              <img class="img-fluid rounded-circle w-75" src="@/assets/img/team-3.jpg" alt="">
              <div class="team-text">
                <h3>To'liq Ism</h3>
                <p>Lavozimi</p>
                <div class="d-flex align-items-center">
                  <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                  <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-twitter"></i></a>
                  <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-instagram"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Team End -->


    <!-- Testimonial Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
          <h1 class="mb-3">Mijozlarimiz Nima Deyishadi!</h1>
          <p>Bizning mijozlarimiz bizning xizmatlarimizdan juda mamnunlar. Ularning fikr-mulohazalari va tajribalari bizning kompaniyamizning sifatini yanada oshiradi. Biz mijozlarimizni tinglashni va ularning ehtiyojlariga moslashishni doimo o'z oldimizga maqsad qilib qo'ydik.</p>
        </div>
        <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
          <div class="testimonial-item bg-light rounded p-5">
            <p class="fs-5">Men ushbu kompaniya bilan ishlashdan juda mamnunman. Ularning mijozlarga xizmat ko'rsatish darajasi juda yuqori va har doim yangiliklarni taklif etishadi. Men ularga butunlay ishonaman va ularni boshqa hamkorlarga tavsiya qilaman.</p>
            <div class="d-flex align-items-center bg-white me-n5" style="border-radius: 50px 0 0 50px;">
              <img class="img-fluid flex-shrink-0 rounded-circle" src="@/assets/img/testimonial-1.jpg" style="width: 90px; height: 90px;">
              <div class="ps-3">
                <h3 class="mb-1">Mijoz Ismi</h3>
                <span>Kasb</span>
              </div>
              <i class="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
            </div>
          </div>
          <div class="testimonial-item bg-light rounded p-5">
            <p class="fs-5">Xizmatlarining sifati va jamoaning malakasi juda yuqori. Har bir so'rovga tezkor javob berishadi va har doim mijozlarining ehtiyojlariga javob berishadi. Bu kompaniya bilan ishlash juda yoqdi.</p>
            <div class="d-flex align-items-center bg-white me-n5" style="border-radius: 50px 0 0 50px;">
              <img class="img-fluid flex-shrink-0 rounded-circle" src="@/assets/img/testimonial-2.jpg" style="width: 90px; height: 90px;">
              <div class="ps-3">
                <h3 class="mb-1">Mijoz Ismi</h3>
                <span>Kasb</span>
              </div>
              <i class="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
            </div>
          </div>
          <div class="testimonial-item bg-light rounded p-5">
            <p class="fs-5">Kompaniya juda ishonchli va samarali ishlaydi. Har doim o'z va'dalarini bajonidil bajarishadi. Mijozlar bilan mustahkam aloqalar o'rnatishadi va har bir ehtiyojni yuqori darajada qondirishadi.</p>
            <div class="d-flex align-items-center bg-white me-n5" style="border-radius: 50px 0 0 50px;">
              <img class="img-fluid flex-shrink-0 rounded-circle" src="@/assets/img/testimonial-3.jpg" style="width: 90px; height: 90px;">
              <div class="ps-3">
                <h3 class="mb-1">Mijoz Ismi</h3>
                <span>Kasb</span>
              </div>
              <i class="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Testimonial End -->


    <!-- Footer Start -->
    <div class="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-3 col-md-6">
            <h3 class="text-white mb-4">Biz Bilan Bog'laning</h3>
            <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 Ko'cha, Nyu-York, AQSh</p>
            <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
            <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
            <div class="d-flex pt-2">
              <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
              <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
              <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
              <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <h3 class="text-white mb-4">Tezkor Havolalar</h3>
            <a class="btn btn-link text-white-50" href="">Biz Haqimizda</a>
            <a class="btn btn-link text-white-50" href="">Biz Bilan Bog'laning</a>
            <a class="btn btn-link text-white-50" href="">Xizmatlarimiz</a>
            <a class="btn btn-link text-white-50" href="">Maxfiylik Siyosati</a>
            <a class="btn btn-link text-white-50" href="">Foydalanish Shartlari</a>
          </div>
          <div class="col-lg-3 col-md-6">
            <h3 class="text-white mb-4">Rasm Galereyasi</h3>
            <div class="row g-2 pt-2">
              <div class="col-4">
                <img class="img-fluid rounded bg-light p-1" src="@/assets/img/classes-1.jpg" alt="">
              </div>
              <div class="col-4">
                <img class="img-fluid rounded bg-light p-1" src="@/assets/img/classes-2.jpg" alt="">
              </div>
              <div class="col-4">
                <img class="img-fluid rounded bg-light p-1" src="@/assets/img/classes-3.jpg" alt="">
              </div>
              <div class="col-4">
                <img class="img-fluid rounded bg-light p-1" src="@/assets/img/classes-4.jpg" alt="">
              </div>
              <div class="col-4">
                <img class="img-fluid rounded bg-light p-1" src="@/assets/img/classes-5.jpg" alt="">
              </div>
              <div class="col-4">
                <img class="img-fluid rounded bg-light p-1" src="@/assets/img/classes-6.jpg" alt="">
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-6">
            <h3 class="text-white mb-4">Yangiliklar Ro'yxatiga A'zo Bo'ling</h3>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div class="position-relative mx-auto" style="max-width: 400px;">
              <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Sizning elektron pochtangiz">
              <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Ro'yxatdan o'tish</button>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="copyright">
          <div class="row">
            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a class="border-bottom" href="#">Sizning Saytingiz Nomi</a>, Barcha Huquqlar Himoyalangan.

              <!--/*** Bu shablon bepul, lekin agar siz footer mualliflik huquqi havolasi/bekor qilish havolasini/attribution havolasini saqlasangiz. Agar siz shablonni footer mualliflik huquqi havolasi/bekor qilish havolasini/attribution havolasini olib tashlashni xohlasangiz, "https://htmlcodex.com/credit-removal" dan Kreditni olib tashlash litsenziyasini sotib olishingiz mumkin. Yordam uchun rahmat. ***/-->
              Dizayn qildi <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
              <br>Ta'minlovchi: <a class="border-bottom" href="https://themewagon.com" target="_blank">ThemeWagon</a>
            </div>
            <div class="col-md-6 text-center text-md-end">
              <div class="footer-menu">
                <a href="">Bosh Sahifa</a>
                <a href="">Cookies</a>
                <a href="">Yordam</a>
                <a href="">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer End -->


    <!-- Back to Top -->
    <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
  </div>


  </body>


</template>

<script setup>

import {onMounted} from 'vue'

onMounted(() => {
  const scripts = [
    'https://code.jquery.com/jquery-3.4.1.min.js',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js',
    '/src/assets/lib/wow/wow.js',
    '/src/assets/lib/easing/easing.min.js',
    '/src/assets/lib/waypoints/waypoints.min.js',
    '/src/assets/lib/owlcarousel/owl.carousel.min.js',
    '/src/assets/js/main.js'
  ]

  scripts.forEach(src => {
    const script = document.createElement('script')
    script.src = src
    script.async = false
    document.body.appendChild(script)
  })
})
</script>
<style scoped>
/* General Styles */
.app-container {
  font-family: 'Poppins', sans-serif;
  color: #333;
}

.navbar {
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-menu .el-menu-item {
  font-weight: bold;
  color: #555;
}

.hero {
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  color: #fff;
  padding: 50px 20px;
  text-align: center;
}

.hero h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.cta-button {
  background-color: #ff6f61;
  border-color: #ff6f61;
  color: #fff;
}

.features {
  background-color: #f9f9f9;
  padding: 50px 20px;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 30px;
}

.feature-card {
  text-align: center;
  padding: 20px;
}

.feature-icon {
  font-size: 3rem;
  color: #ff6f61;
}

.testimonials {
  padding: 50px 20px;
}

.testimonial-card blockquote {
  font-style: italic;
  color: #555;
}

.contact {
  background-color: #f9f9f9;
  padding: 50px 20px;
}

.footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
}

.footer-logo .brand-text {
  color: #ff6f61;
}
</style>
<script setup lang="ts">
</script>