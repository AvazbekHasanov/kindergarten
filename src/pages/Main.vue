<template>
  <el-container class="app-container">
    <!-- Header Section -->
    <el-header class="navbar">
      <div class="nav-content">
        <div class="nav-logo">
          <i class="el-icon-s-custom"></i>
          <span class="brand-text">Kinder<span class="accent">Care</span></span>
        </div>
        <el-menu mode="horizontal" class="nav-menu">
          <el-menu-item index="1"><i class="el-icon-house"></i> Home</el-menu-item>
          <el-menu-item index="2"><i class="el-icon-notebook-1"></i> Programs</el-menu-item>
          <el-menu-item index="3"><i class="el-icon-info"></i> About</el-menu-item>
          <el-menu-item index="4"><i class="el-icon-star-off"></i> Reviews</el-menu-item>
          <el-menu-item index="5"><i class="el-icon-message"></i> Contact</el-menu-item>
          <el-menu-item> <router-link to="/sign" >Registration</router-link> </el-menu-item>
        </el-menu>
      </div>
    </el-header>

    <!-- Hero Section -->
    <el-main class="hero">
      <el-row class="hero-content" gutter="20">
        <el-col :span="12" class="hero-text">
          <h1>Where Learning Meets Joy</h1>
          <p>Creating a foundation for lifelong learning through play, discovery, and care.</p>
          <el-button type="primary" size="large" class="cta-button">
            Explore Our Programs <i class="el-icon-arrow-right"></i>
          </el-button>
        </el-col>
        <el-col :span="12">
          <el-card class="enrollment-card">
            <h2>Join Our Family</h2>
            <el-form class="enrollment-form" label-position="top">
              <el-form-item label="Parent's Name">
                <el-input placeholder="Parent's Name"></el-input>
              </el-form-item>
              <el-form-item label="Email Address">
                <el-input type="email" placeholder="Email Address"></el-input>
              </el-form-item>
              <el-form-item label="Phone Number">
                <el-input type="tel" placeholder="Phone Number"></el-input>
              </el-form-item>
              <el-button type="success" size="large" block class="enroll-button">Start Enrollment</el-button>
            </el-form>
          </el-card>
        </el-col>
      </el-row>
    </el-main>

    <!-- Features Section -->
    <el-main class="features">
      <h2 class="section-title">Our Features</h2>
      <el-row class="features-grid" gutter="20">
        <el-col :span="8">
          <el-card class="feature-card" shadow="hover">
            <i class="el-icon-medal-1 feature-icon"></i>
            <h3>Quality Education</h3>
            <p>Structured learning programs designed for each age group</p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="feature-card" shadow="hover">
            <i class="el-icon-heart feature-icon"></i>
            <h3>Caring Environment</h3>
            <p>Nurturing atmosphere with experienced caregivers</p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="feature-card" shadow="hover">
            <i class="el-icon-magic-stick feature-icon"></i>
            <h3>Creative Activities</h3>
            <p>Engaging activities that foster growth and development</p>
          </el-card>
        </el-col>
      </el-row>
    </el-main>

    <!-- Testimonials Section -->
    <el-main class="testimonials">
      <h2 class="section-title">Parent Testimonials</h2>
      <el-row class="testimonials-grid" gutter="20">
        <el-col :span="12">
          <el-card class="testimonial-card">
            <blockquote>"The best decision we made for our child's early education."</blockquote>
            <div class="author">
              <el-avatar src="https://via.placeholder.com/50"></el-avatar>
              <div class="author-info">
                <h4>Sarah Johnson</h4>
                <p>Parent of Tom, Age 4</p>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card class="testimonial-card">
            <blockquote>"Amazing staff and wonderful learning environment!"</blockquote>
            <div class="author">
              <el-avatar src="https://via.placeholder.com/50"></el-avatar>
              <div class="author-info">
                <h4>Michael Smith</h4>
                <p>Parent of Emma, Age 3</p>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </el-main>

    <!-- Contact Section -->
    <el-main class="contact">
      <h2 class="section-title">Get in Touch</h2>
      <el-row class="contact-grid" gutter="20">
        <el-col :span="12" class="contact-info">
          <p><i class="el-icon-location"></i> 123 Education Street, City, State</p>
          <p><i class="el-icon-phone"></i> (555) 123-4567</p>
          <p><i class="el-icon-message"></i> hello@kindercare.com</p>
        </el-col>
        <el-col :span="12">
          <el-form class="contact-form" label-position="top">
            <el-form-item label="Your Name">
              <el-input placeholder="Your Name"></el-input>
            </el-form-item>
            <el-form-item label="Email Address">
              <el-input type="email" placeholder="Email Address"></el-input>
            </el-form-item>
            <el-form-item label="Your Message">
              <el-input type="textarea" placeholder="Your Message"></el-input>
            </el-form-item>
            <el-button type="primary" size="large" block class="send-button">Send Message</el-button>
          </el-form>
        </el-col>
      </el-row>
    </el-main>

    <!-- Footer -->
    <el-footer class="footer">
      <div class="footer-content">
        <div class="footer-logo">
          <i class="el-icon-s-custom"></i>
          <span class="brand-text">KinderCare</span>
        </div>
        <div class="social-links">
          <el-link href="#" icon="el-icon-facebook"></el-link>
          <el-link href="#" icon="el-icon-instagram"></el-link>
          <el-link href="#" icon="el-icon-twitter"></el-link>
        </div>
        <p>&copy; 2023 KinderCare. All rights reserved.</p>
      </div>
    </el-footer>
  </el-container>
</template>

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